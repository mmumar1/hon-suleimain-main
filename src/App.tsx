import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { AnimatePresence } from 'framer-motion';

import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import CommunityImpact from './pages/CommunityImpact';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Media from './pages/Media';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import Success from './pages/Success';
import NotFound from './pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/vision" component={Vision} />
        <Route path="/community-impact" component={CommunityImpact} />
        <Route path="/programs" component={Programs} />
        <Route path="/programs/:id" component={ProgramDetail} />
        <Route path="/news" component={News} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/media" component={Media} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/contact" component={Contact} />
        <Route path="/success" component={Success} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <MainLayout>
            <Router />
          </MainLayout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
