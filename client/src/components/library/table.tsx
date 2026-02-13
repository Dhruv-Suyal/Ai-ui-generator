interface TableProps {
  headers: string[];
  rows: Record<string, number>[];
}

export const Table = ({ headers, rows }: TableProps) => {
  return (
    <div className="w-full overflow-hidden border border-slate-200 rounded-lg">
      <table className="w-full text-left border-collapse bg-white">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-50 transition-colors">
              {headers.map((header) => (
                <td key={header} className="px-6 py-4 text-sm text-slate-600">
                  {row[header.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};