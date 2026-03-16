interface SpecificationsTableProps {
  specifications: Record<string, string>
}

export default function SpecificationsTable({ specifications }: SpecificationsTableProps) {
  if (Object.keys(specifications).length === 0) {
    return <p className="text-muted-foreground">No specifications available</p>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-border bg-muted/50">
            <th className="text-left py-4 px-4 font-semibold text-foreground">Parameter</th>
            <th className="text-left py-4 px-4 font-semibold text-foreground">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(specifications).map(([key, value], i) => (
            <tr key={i} className="border-b border-border hover:bg-muted/30 transition">
              <td className="py-4 px-4 font-medium text-foreground">{key}</td>
              <td className="py-4 px-4 text-muted-foreground">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
