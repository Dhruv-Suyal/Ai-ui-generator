
interface TableProps {
  headers?: string[];
  // Using Record<string, React.ReactNode> for strict but flexible row typing
  rows?: Record<string, string | number | boolean | null | undefined>[];
}

export const Table = ({ headers, rows }: TableProps) => {
  // Force safety: Ensure headers and rows are ALWAYS arrays
  const safeHeaders = Array.isArray(headers) ? headers : [];
  const safeRows = Array.isArray(rows) ? rows : [];

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/50 border-b border-slate-200">
            <tr>
              {safeHeaders.map((h, index) => (
                <th 
                  key={`head-${index}`} 
                  className="px-6 py-5 text-sm font-bold text-slate-600 uppercase tracking-widest"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {safeRows.length > 0 ? (
              safeRows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`} className="hover:bg-slate-50/30 transition-colors">
                  {safeHeaders.map((h, colIndex) => {
                    // Logic to find value by exact key or lowercase key
                    const value = row[h] ?? row[h.toLowerCase()];
                    const cellValue = value !== null && value !== undefined ? String(value) : "-";
                    
                    return (
                      <td key={`cell-${rowIndex}-${colIndex}`} className="px-6 py-5 text-slate-700">
                        {cellValue}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td 
                  colSpan={safeHeaders.length || 1} 
                  className="px-6 py-12 text-center text-slate-400 italic"
                >
                  No data provided
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};