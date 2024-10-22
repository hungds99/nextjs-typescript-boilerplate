import { ScrollArea } from '@/components/ui/scroll-area';
import UserForm from './_components/create-form';

export default function User() {
  return (
    <ScrollArea className='h-[calc(100dvh-52px)]'>
      <div className='h-full p-4 md:px-8'>
        <UserForm />
      </div>
    </ScrollArea>
  );
}
