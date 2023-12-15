import React from 'react'
import './Table.scss'

interface TableProps {
  data: any[]
  columns: Array<{
    key: string
    label: string
  }>
}

export const Table: React.FC<TableProps> = ({
  data,
  columns
}): React.ReactElement => {
  return (
        <table>
            <thead>
                <tr>{
                    columns.map((c: any, index: number) => (
                        <th key={`column_${index}`}>{c.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row: any, index: number) => {
                      const rowKeys = columns.map((c: { key: string, label: string }) => c.key)

                      return (
                            // TODO: add more robust / unique index
                            <tr key={`row_${index}`}>
                                {
                                    rowKeys.map((key: string) => (
                                        <td key={`row_${index}_${key}`}>{row[key]}</td>
                                    ))
                                }
                            </tr>
                      )
                    })
                }
            </tbody>
        </table>
  )
}

export default Table
