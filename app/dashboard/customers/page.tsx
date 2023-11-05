import { Metadata } from 'next';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import type { FormattedCustomersTable } from '@/app/lib/definitions';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  return (
    <main>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table customers={customers} query={query} />
      </Suspense>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Customers',
};
