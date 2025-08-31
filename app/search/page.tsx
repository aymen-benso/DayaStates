import { SearchFilters } from "@/components/search/search-filters"
import { SearchResults } from "@/components/search/search-results"
import { Header } from "@/components/header"

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Recherche de propriétés</h1>
          <p className="text-muted-foreground">Trouvez votre propriété idéale parmi nos annonces</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SearchFilters />
          </div>
          <div className="lg:col-span-3">
            <SearchResults />
          </div>
        </div>
      </main>
    </div>
  )
}
