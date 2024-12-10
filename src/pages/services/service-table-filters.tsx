import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ServiceTableFilters() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="ID do serviço"
        className="h-8 w-auto"
      />
      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
      />

      <Select>
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue placeholder="Todos status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">Todos status</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button type="submit" variant="outline" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button
        type="button"
        variant="outline"
        size="xs"
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </div>
  )
}
