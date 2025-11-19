'use client';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Card } from '../ui/card';
import { format } from 'date-fns';

type Submission = {
  id: string;
  [key: string]: any;
};

type SubmissionsTableProps = {
  data: Submission[];
};

export function SubmissionsTable({ data }: SubmissionsTableProps) {
  if (!data || data.length === 0) {
    return <p>No submissions found for this form.</p>;
  }

  // Get headers from the keys of the first item, excluding the id
  const headers = Object.keys(data[0]).filter(key => key !== 'id' && typeof data[0][key] !== 'object');

  const formatValue = (value: any): string => {
    if (value instanceof Date) {
        return format(value, 'PPP p');
    }
    if (value && typeof value === 'object' && value.toDate) { // Firebase Timestamp
        return format(value.toDate(), 'PPP p');
    }
    if (typeof value === 'boolean') {
        return value ? 'Yes' : 'No';
    }
    if (Array.isArray(value)) {
        return value.join(', ');
    }
    return String(value);
  }

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header} className="capitalize">
                {header.replace(/([A-Z])/g, ' $1')}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              {headers.map((header) => (
                <TableCell key={`${item.id}-${header}`}>
                  {formatValue(item[header])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
