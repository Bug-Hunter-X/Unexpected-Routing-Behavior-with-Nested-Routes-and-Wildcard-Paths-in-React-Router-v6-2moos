```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactLayout/>}>
          <Route path=":contactId/*" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function ContactLayout() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
        <h1>Contact</h1>
        <div>{location.pathname}</div>
    </div>
  );
}

function Contact() { 
    let location = useLocation();
    return (
      <div>
        <h1>Contact Detail</h1>
        <div>{location.pathname}</div>
      </div>
    );
}
```