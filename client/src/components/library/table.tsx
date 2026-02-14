import React from 'react';

interface TableProps {
  headers?: string[];
  rows?: Record<string, string | number | boolean | null | undefined>[];
}

export const Table: React.FC<TableProps> = ({ headers, rows }) => {
  const safeHeaders = Array.isArray(headers) ? headers : [];
  const safeRows = Array.isArray(rows) ? rows : [];

  return (
    <div className="w-full mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200">
              {safeHeaders.map((h, index) => (
                <th 
                  key={`head-${index}`} 
                  className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {safeRows.length > 0 ? (
              safeRows.map((row, rowIndex) => (
                <tr 
                  key={`row-${rowIndex}`} 
                  className="group hover:bg-indigo-50/30 transition-colors"
                >
                  {safeHeaders.map((h, colIndex) => {
                    const value = row[h] ?? row[h.toLowerCase()];
                    const cellValue = value !== null && value !== undefined ? String(value) : "-";
                    
                    return (
                      <td 
                        key={`cell-${rowIndex}-${colIndex}`} 
                        className="px-6 py-4 text-sm text-slate-600 group-hover:text-slate-900 transition-colors"
                      >
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
                  className="px-6 py-20 text-center text-sm text-slate-400 font-medium italic"
                >
                  No data records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};