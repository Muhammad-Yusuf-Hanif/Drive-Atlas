import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { useApiResource } from "../../hooks/useApiResource";
import type { CarSearchPayload } from "../../types/cars";

const emptyFilters = {
  bodyStyle: "",
  engineSize: "",
  fuelType: "",
  transmission: "",
  drivetrain: "",
  seats: "",
};

type FilterKey = keyof typeof emptyFilters;

function isOpenTopBodyStyle(bodyStyle: string) {
  const normalizedStyle = bodyStyle.toLowerCase();
  return ["cabriolet", "convertible", "roadster"].some((style) =>
    normalizedStyle.includes(style),
  );
}

function buildSearchPath(
  searchTerm: string,
  filters: typeof emptyFilters,
  requiredFeatures: string[],
) {
  const params = new URLSearchParams();

  if (searchTerm.trim()) params.set("q", searchTerm.trim());

  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });

  if (requiredFeatures.length > 0) {
    params.set("features", requiredFeatures.join(","));
  }

  const queryString = params.toString();
  return queryString ? `/api/search?${queryString}` : "/api/search";
}

export function VehicleSearchPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState(emptyFilters);
  const [requiredFeatures, setRequiredFeatures] = useState<string[]>([]);
  const searchPath = useMemo(
    () => buildSearchPath(searchTerm, filters, requiredFeatures),
    [filters, requiredFeatures, searchTerm],
  );
  const { data, errorStatus, isLoading } =
    useApiResource<CarSearchPayload>(searchPath);
  const selectedOpenTopBody = isOpenTopBodyStyle(filters.bodyStyle);

  function updateFilter(key: FilterKey, value: string) {
    setFilters((currentFilters) => ({ ...currentFilters, [key]: value }));

    if (key === "bodyStyle" && isOpenTopBodyStyle(value)) {
      setRequiredFeatures((currentFeatures) =>
        currentFeatures.filter((feature) => feature !== "panoramic-roof"),
      );
    }
  }

  function toggleRequiredFeature(feature: string) {
    setRequiredFeatures((currentFeatures) =>
      currentFeatures.includes(feature)
        ? currentFeatures.filter((currentFeature) => currentFeature !== feature)
        : [...currentFeatures, feature],
    );
  }

  return (
    <section className="rounded-2xl border border-white/12 bg-slate-950/70 p-4 text-white shadow-[0_25px_90px_rgba(2,6,23,0.35)] sm:p-5 lg:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
          <label className="flex-1">
            <span className="mb-2 block text-xs font-semibold uppercase text-white/60">
              Search
            </span>
            <div className="flex min-h-12 items-center gap-3 rounded-xl border border-white/15 bg-white/8 px-4 focus-within:border-amber-300/70">
              <Search className="h-5 w-5 text-amber-300" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="BMW 3 Series, saloon, diesel, M3..."
                className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-white/45 focus:outline-none"
              />
            </div>
          </label>

          <div className="flex items-center gap-2 rounded-xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/75">
            <SlidersHorizontal className="h-4 w-4 text-amber-300" />
            <span>{data?.total ?? 0} matches</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <SearchSelect
            label="Body style"
            value={filters.bodyStyle}
            options={data?.options.bodyStyles ?? []}
            onChange={(value) => updateFilter("bodyStyle", value)}
          />
          <SearchSelect
            label="Engine size"
            value={filters.engineSize}
            options={data?.options.engineSizes ?? []}
            onChange={(value) => updateFilter("engineSize", value)}
          />
          <SearchSelect
            label="Fuel"
            value={filters.fuelType}
            options={data?.options.fuelTypes ?? []}
            onChange={(value) => updateFilter("fuelType", value)}
          />
          <SearchSelect
            label="Transmission"
            value={filters.transmission}
            options={data?.options.transmissions ?? []}
            onChange={(value) => updateFilter("transmission", value)}
          />
          <SearchSelect
            label="Drivetrain"
            value={filters.drivetrain}
            options={data?.options.drivetrains ?? []}
            onChange={(value) => updateFilter("drivetrain", value)}
          />
          <SearchSelect
            label="Seats"
            value={filters.seats}
            options={data?.options.seats ?? []}
            onChange={(value) => updateFilter("seats", value)}
          />
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-white/60">
            Required equipment
          </p>
          <div className="flex flex-wrap gap-2">
            {(data?.options.features ?? []).map((feature) => {
              const isDisabled =
                feature.value === "panoramic-roof" && selectedOpenTopBody;
              const isSelected = requiredFeatures.includes(feature.value);

              return (
                <label
                  key={feature.value}
                  className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-3 text-sm font-medium transition ${
                    isSelected
                      ? "border-amber-300 bg-amber-300 text-slate-950"
                      : "border-white/15 bg-white/8 text-white hover:bg-white/12"
                  } ${isDisabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    disabled={isDisabled}
                    onChange={() => toggleRequiredFeature(feature.value)}
                    className="h-4 w-4 accent-amber-300"
                  />
                  <span>{feature.label}</span>
                </label>
              );
            })}
          </div>
        </div>

        {errorStatus ? (
          <div className="rounded-xl border border-red-300/30 bg-red-950/35 p-4 text-sm text-red-100">
            Search is unavailable because the API did not return vehicle data.
          </div>
        ) : null}

        <div className="grid gap-3">
          {isLoading ? (
            <div className="rounded-xl border border-white/12 bg-white/8 p-4 text-sm text-white/70">
              Loading matching vehicles...
            </div>
          ) : null}

          {!isLoading && data?.results.length === 0 ? (
            <div className="rounded-xl border border-white/12 bg-white/8 p-4 text-sm text-white/70">
              No vehicles match every selected requirement.
            </div>
          ) : null}

          {data?.results.slice(0, 6).map((result) => (
            <Link
              key={result.id}
              to={result.route}
              className="grid gap-3 rounded-xl border border-white/12 bg-white/8 p-4 text-white transition hover:border-amber-300/50 hover:bg-white/12 sm:grid-cols-[1fr_auto]"
            >
              <div>
                <p className="text-xs font-semibold uppercase text-amber-200">
                  {result.brand.name}
                  {result.family ? ` / ${result.family.name}` : ""}
                </p>
                <h3 className="mt-1 text-base font-semibold">
                  {result.vehicle.name}
                </h3>
                <p className="mt-1 text-sm text-white/68">
                  {result.vehicle.shortDescription}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-white/78 sm:min-w-72">
                <SpecPill label="Body" value={result.vehicle.specs.bodyStyle} />
                <SpecPill label="Engine" value={`${result.vehicle.engineSizeLitres}L`} />
                <SpecPill label="Power" value={result.vehicle.specs.power} />
                <SpecPill label="Fuel" value={result.vehicle.specs.fuelType} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

type SearchSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function SearchSelect({ label, value, options, onChange }: SearchSelectProps) {
  return (
    <label>
      <span className="mb-2 block text-xs font-semibold uppercase text-white/60">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-11 w-full rounded-xl border border-white/15 bg-slate-900 px-3 text-sm text-white focus:border-amber-300/70 focus:outline-none"
      >
        <option value="">Any {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

type SpecPillProps = {
  label: string;
  value: string;
};

function SpecPill({ label, value }: SpecPillProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/45 px-3 py-2">
      <p className="text-[0.65rem] font-semibold uppercase text-white/45">
        {label}
      </p>
      <p className="mt-0.5 font-medium">{value}</p>
    </div>
  );
}
