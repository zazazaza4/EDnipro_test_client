import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import AppRouter from '@/routes/AppRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/index.css';

const queryClient = new QueryClient({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const fetchDevTools = process.env.NODE_ENV === 'development' && (
  <ReactQueryDevtools initialIsOpen />
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <main className="">
          <AppRouter />
        </main>
        <Footer />
      </Router>

      <ToastContainer />

      {fetchDevTools}
    </QueryClientProvider>
  );
}

export { App };
