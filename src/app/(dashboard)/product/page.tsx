import { buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import { searchParamsCache, serialize } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { SearchParams } from 'nuqs/server';
import { Suspense } from 'react';
import ProductListingPage from './_components/product-listing';
import ProductTableAction from './_components/product-tables/product-table-action';

export const metadata = {
  title: 'Dashboard: Products',
};

type pageProps = {
  searchParams: SearchParams;
};

export default async function Page({ searchParams }: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  // This key is used for invoke suspense if any of the search params changed (used for filters).
  const key = serialize({ ...searchParams });

  return (
    <ScrollArea className='h-[calc(100dvh-52px)]'>
      <div className='h-full p-4 md:px-8'>
        <div className='space-y-4'>
          <div className='flex items-start justify-between'>
            <Link href='/product/new' className={cn(buttonVariants(), 'text-xs md:text-sm')}>
              <Plus className='mr-2 h-4 w-4' /> Add New
            </Link>
          </div>
          <Separator />
          <ProductTableAction />
          <Suspense key={key} fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}>
            <ProductListingPage />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  );
}
