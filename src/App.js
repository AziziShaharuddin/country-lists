import Container from 'components/Layout/Container';
import ThemeProvider from 'context/ThemeContext';
import DetailPage from 'pages/DetailPage';
import MainPage from 'pages/MainPage/view';
import PageNotFound from 'pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Container />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/country/:name' element={<DetailPage />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
