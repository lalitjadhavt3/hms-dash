import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import Badge from "../../../components/ui/badge/Badge";
import { Medicine } from '../../../types/hms.types';

interface MedicineTableProps {
  medicines: Medicine[];
}

const MedicineTable: React.FC<MedicineTableProps> = ({ medicines }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Medicine
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Category
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Manufacturer
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Stock
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Unit Price
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Expiry Date
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {medicines.map((medicine) => {
              const isLowStock = medicine.stock <= medicine.reorderLevel;
              const isExpired = new Date(medicine.expiryDate) < new Date();
              
              return (
                <TableRow key={medicine.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div>
                      <span className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {medicine.name}
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {medicine.genericName}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {medicine.category}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {medicine.manufacturer}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <span className={`font-medium ${isLowStock ? 'text-warning' : 'text-gray-800 dark:text-white'}`}>
                      {medicine.stock}
                    </span>
                    {isLowStock && (
                      <p className="text-xs text-warning">Reorder needed</p>
                    )}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    ${medicine.unitPrice}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <span className={isExpired ? 'text-error' : ''}>
                      {new Date(medicine.expiryDate).toLocaleDateString()}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        isExpired
                          ? "error"
                          : isLowStock
                          ? "warning"
                          : "success"
                      }
                    >
                      {isExpired ? "Expired" : isLowStock ? "Low Stock" : "Available"}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MedicineTable;
