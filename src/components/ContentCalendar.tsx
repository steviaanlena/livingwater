"use client";

import { useState, useMemo } from "react";
import APRIL_2026, {
  ContentItem,
  CATEGORY_COLORS,
  CATEGORY_DOT_COLORS,
  SERIES_LIST,
  ContentCategory,
} from "./calendarData";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAME = "April 2026";

// April 2026 starts on Wednesday (day index 3), has 30 days
const FIRST_DAY_OFFSET = 3; // Wednesday
const TOTAL_DAYS = 30;

function getCells(): (number | null)[] {
  const cells: (number | null)[] = [];
  for (let i = 0; i < FIRST_DAY_OFFSET; i++) cells.push(null);
  for (let d = 1; d <= TOTAL_DAYS; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function formatDate(day: number): string {
  return `2026-04-${String(day).padStart(2, "0")}`;
}

export default function ContentCalendar() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<ContentCategory | "all">("all");
  const [filterSeries, setFilterSeries] = useState<string>("all");

  const cells = useMemo(() => getCells(), []);

  const contentByDate = useMemo(() => {
    const map: Record<string, ContentItem[]> = {};
    for (const item of APRIL_2026) {
      if (!map[item.date]) map[item.date] = [];
      map[item.date].push(item);
    }
    return map;
  }, []);

  const filteredItems = useMemo(() => {
    if (!selectedDate) return [];
    const dateStr = formatDate(selectedDate);
    const items = contentByDate[dateStr] || [];
    return items.filter((item) => {
      if (filterCategory !== "all" && item.category !== filterCategory) return false;
      if (filterSeries !== "all" && item.series !== filterSeries) return false;
      return true;
    });
  }, [selectedDate, contentByDate, filterCategory, filterSeries]);

  const allFilteredItems = useMemo(() => {
    return APRIL_2026.filter((item) => {
      if (filterCategory !== "all" && item.category !== filterCategory) return false;
      if (filterSeries !== "all" && item.series !== filterSeries) return false;
      return true;
    });
  }, [filterCategory, filterSeries]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy-800">
          {MONTH_NAME}
        </h1>
        <p className="text-navy-500 mt-1">
          Content Calendar &middot; Instagram & TikTok &middot; {APRIL_2026.length} posts planned
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value as ContentCategory | "all")}
          className="px-3 py-2 rounded-lg border border-navy-200 bg-white text-sm text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-400"
        >
          <option value="all">All Categories</option>
          <option value="quotes">Quotes</option>
          <option value="stories">Stories</option>
          <option value="devotionals">Devotionals</option>
          <option value="engagement">Engagement</option>
          <option value="creative">Creative</option>
        </select>
        <select
          value={filterSeries}
          onChange={(e) => setFilterSeries(e.target.value)}
          className="px-3 py-2 rounded-lg border border-navy-200 bg-white text-sm text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-400"
        >
          <option value="all">All Series</option>
          {SERIES_LIST.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 text-xs">
        {(Object.entries(CATEGORY_DOT_COLORS) as [ContentCategory, string][]).map(
          ([cat, color]) => (
            <div key={cat} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
              <span className="text-navy-600 capitalize">{cat}</span>
            </div>
          )
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar Grid */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Day headers */}
            <div className="grid grid-cols-7 bg-navy-50">
              {DAYS.map((d) => (
                <div
                  key={d}
                  className="py-3 text-center text-xs font-semibold text-navy-500 uppercase tracking-wider"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Date cells */}
            <div className="grid grid-cols-7">
              {cells.map((day, i) => {
                if (day === null) {
                  return <div key={`empty-${i}`} className="h-24 bg-gray-50 border-t border-r border-navy-100" />;
                }

                const dateStr = formatDate(day);
                const items = contentByDate[dateStr] || [];
                const visibleItems = items.filter((item) => {
                  if (filterCategory !== "all" && item.category !== filterCategory) return false;
                  if (filterSeries !== "all" && item.series !== filterSeries) return false;
                  return true;
                });
                const isSelected = selectedDate === day;
                const isToday = day === 6; // April 6, 2026

                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`h-24 p-1.5 border-t border-r border-navy-100 text-left transition-colors hover:bg-navy-50 ${
                      isSelected ? "bg-navy-50 ring-2 ring-inset ring-navy-400" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-xs font-medium w-6 h-6 flex items-center justify-center rounded-full ${
                          isToday
                            ? "bg-navy-600 text-white"
                            : "text-navy-700"
                        }`}
                      >
                        {day}
                      </span>
                      {visibleItems.length > 0 && (
                        <span className="text-[10px] text-navy-400">
                          {visibleItems.length}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-0.5">
                      {visibleItems.slice(0, 4).map((item) => (
                        <div
                          key={item.id}
                          className={`w-2 h-2 rounded-full ${
                            CATEGORY_DOT_COLORS[item.category]
                          }`}
                          title={item.title}
                        />
                      ))}
                      {visibleItems.length > 4 && (
                        <span className="text-[9px] text-navy-400">
                          +{visibleItems.length - 4}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5 gap-3 mt-6">
            {(
              [
                ["quotes", "Quotes"],
                ["stories", "Stories"],
                ["devotionals", "Devotionals"],
                ["engagement", "Engagement"],
                ["creative", "Creative"],
              ] as [ContentCategory, string][]
            ).map(([cat, label]) => {
              const count = allFilteredItems.filter(
                (i) => i.category === cat
              ).length;
              return (
                <div
                  key={cat}
                  className="bg-white rounded-lg p-3 text-center shadow-sm"
                >
                  <div className="text-2xl font-bold text-navy-700">
                    {count}
                  </div>
                  <div className="text-xs text-navy-500">{label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar — Selected Date Detail */}
        <div className="lg:col-span-1">
          {selectedDate ? (
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-navy-800 mb-4">
                April {selectedDate}, 2026
              </h2>
              {filteredItems.length === 0 ? (
                <p className="text-navy-400 text-sm">
                  No content planned for this date
                  {filterCategory !== "all" || filterSeries !== "all"
                    ? " (with current filters)"
                    : ""}
                  .
                </p>
              ) : (
                <div className="space-y-3">
                  {filteredItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() =>
                        setSelectedItem(
                          selectedItem?.id === item.id ? null : item
                        )
                      }
                      className={`w-full text-left bg-white rounded-xl p-4 shadow-sm border-l-4 transition-all hover:shadow-md ${
                        CATEGORY_COLORS[item.category].split(" ")[0]
                      } ${
                        selectedItem?.id === item.id
                          ? "ring-2 ring-navy-400"
                          : ""
                      }`}
                      style={{
                        borderLeftColor:
                          item.category === "quotes"
                            ? "#d4a545"
                            : item.category === "stories"
                            ? "#f87171"
                            : item.category === "devotionals"
                            ? "#1e4a6e"
                            : item.category === "engagement"
                            ? "#34d399"
                            : "#a78bfa",
                      }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-navy-800 text-sm leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-navy-500 mt-1">
                            {item.series}
                          </p>
                        </div>
                        <span
                          className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full border ${
                            CATEGORY_COLORS[item.category]
                          }`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-navy-50 text-navy-500">
                          {item.platform === "both"
                            ? "IG + TikTok"
                            : item.platform === "instagram"
                            ? "Instagram"
                            : "TikTok"}
                        </span>
                        {item.bibleRef && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-50 text-gold-700">
                            {item.bibleRef}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">&#x1F4C5;</div>
              <p className="text-navy-500">
                Click a date to see planned content
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Expanded Content Detail */}
      {selectedItem && (
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-navy-100">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy-800">
                {selectedItem.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <span
                  className={`text-xs px-2.5 py-1 rounded-full border ${
                    CATEGORY_COLORS[selectedItem.category]
                  }`}
                >
                  {selectedItem.category}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-navy-50 text-navy-600">
                  {selectedItem.series}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-navy-50 text-navy-600">
                  {selectedItem.platform === "both"
                    ? "Instagram + TikTok"
                    : selectedItem.platform}
                </span>
                {selectedItem.bibleRef && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gold-50 text-gold-700 border border-gold-200">
                    {selectedItem.bibleRef}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => setSelectedItem(null)}
              className="text-navy-400 hover:text-navy-600 transition-colors text-xl"
            >
              &times;
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-2">
                Description
              </h3>
              <p className="text-navy-700 leading-relaxed">
                {selectedItem.description}
              </p>

              {selectedItem.notes && (
                <>
                  <h3 className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-2 mt-6">
                    Notes
                  </h3>
                  <p className="text-navy-600 bg-gold-50 border border-gold-200 rounded-lg p-3 text-sm">
                    {selectedItem.notes}
                  </p>
                </>
              )}

              <h3 className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-2 mt-6">
                Hashtags
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed">
                {selectedItem.hashtags}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-2">
                Caption
              </h3>
              <div className="bg-cream rounded-xl p-4 text-navy-700 text-sm leading-relaxed whitespace-pre-line max-h-96 overflow-y-auto">
                {selectedItem.caption}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
