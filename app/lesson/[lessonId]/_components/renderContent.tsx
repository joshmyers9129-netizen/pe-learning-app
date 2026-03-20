import React from "react";

export function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderTable(lines: string[], key: number): React.ReactNode {
  const rows = lines.map((l) =>
    l
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim())
  );
  const isAlignRow = (cells: string[]) =>
    cells.every((c) => /^:?-+:?$/.test(c));
  const headerRow = rows[0];
  const bodyRows = rows.slice(1).filter((r) => !isAlignRow(r));
  return (
    <div key={key} className="overflow-x-auto">
      <table className="w-full text-[13px] border-collapse">
        <thead>
          <tr>
            {headerRow.map((cell, j) => (
              <th
                key={j}
                className="border border-[#000]/15 bg-[#000]/5 px-3 py-2 text-left font-semibold text-[#000000]"
              >
                {renderInline(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "" : "bg-[#000]/[0.02]"}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border border-[#000]/15 px-3 py-2 text-[#000000] leading-[1.5]"
                >
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function renderContent(text: string): React.ReactNode {
  const paragraphs = text.split(/\n\n+/);
  const nodes: React.ReactNode[] = [];

  for (let i = 0; i < paragraphs.length; i++) {
    const para = paragraphs[i].trim();
    if (!para) continue;

    const lines = para.split("\n");
    const isTable = lines.every((l) => l.trimStart().startsWith("|"));
    const isBulletList = lines.every((l) => l.trimStart().startsWith("- "));
    const isNumberedList = lines.every((l) => /^\d+\.\s/.test(l.trimStart()));

    if (isTable) {
      nodes.push(renderTable(lines, i));
    } else if (isBulletList) {
      nodes.push(
        <ul key={i} className="list-disc list-outside ml-4 space-y-1 text-[15px] text-[#000000] leading-[1.7]">
          {lines.map((l, j) => (
            <li key={j}>{renderInline(l.replace(/^-\s+/, ""))}</li>
          ))}
        </ul>
      );
    } else if (isNumberedList) {
      nodes.push(
        <ol key={i} className="list-decimal list-outside ml-4 space-y-1 text-[15px] text-[#000000] leading-[1.7]">
          {lines.map((l, j) => (
            <li key={j}>{renderInline(l.replace(/^\d+\.\s+/, ""))}</li>
          ))}
        </ol>
      );
    } else {
      nodes.push(
        <p key={i} className="text-[15px] text-[#000000] leading-[1.7]">
          {renderInline(para)}
        </p>
      );
    }
  }

  return <div className="space-y-2">{nodes}</div>;
}
