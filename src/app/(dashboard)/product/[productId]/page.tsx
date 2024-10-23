import { ScrollArea } from '@/components/ui/scroll-area';
import ProductViewPage from '../_components/product-view-page';

export const metadata = {
  title: 'Dashboard : Product View',
};

type PageProps = { params: { productId: string } };

export default function Page({ params }: PageProps) {
  return (
    <ScrollArea className='h-[calc(100dvh-52px)]'>
      <div className='h-full p-4 md:px-8'>
        <div className='flex-1 space-y-4'>
          <ProductViewPage productId={params.productId} />
        </div>
      </div>
    </ScrollArea>
  );
}
