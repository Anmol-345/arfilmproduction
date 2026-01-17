export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-serif">arfilmproduction</p>
          <p className="text-muted-foreground">© {new Date().getFullYear()} arfilmproduction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
