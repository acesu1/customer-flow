import { ServiceTableFilters } from './service-table-filters'

export function Services() {
  return (
    (
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Serviços</h1>

        <div className="space-y-2.5">
          <ServiceTableFilters />
        </div>
      </div>
    )
  )
}
