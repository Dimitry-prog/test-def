import { Button } from '@/shared/components/ui/button.tsx';
import { useSocket } from '@/pages/socket/hooks/use-socket.ts';
import { SocketFormType } from '@/pages/socket/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { socketFormSchema } from '@/pages/socket/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import Loader from '@/shared/components/loader.tsx';

const SocketPage = () => {
  const { socket, messages } = useSocket();

  const form = useForm<SocketFormType>({
    resolver: zodResolver(socketFormSchema),
    defaultValues: {
      message: '',
    },
  });

  const onSubmit: SubmitHandler<SocketFormType> = (values) => {
    socket.send(values.message);
    form.reset();
  };

  return (
    <section className="mx-auto max-w-xl space-y-5">
      <h2 className="text-center text-2xl font-bold">Socket</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input placeholder="Enter message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="flex items-center gap-2">
            Create
            {form.formState.isSubmitting && <Loader />}
          </Button>
        </form>
      </Form>

      <ul className="space-y-4">
        {messages.map((message, index) => (
          <li key={`${message}-${index}`} className="font-normal">
            {message}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocketPage;
