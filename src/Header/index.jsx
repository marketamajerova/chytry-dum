import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

// 4. Vytvoř samostatnou komponentu Header, která bude obsahovat jednoduchý kód ze vzorového HTML. 
// Komponentě přidej prop title, kterou do komponenty půjde poslat obsah nadpisu. Ve vzorovém HTML 
// je to 'Chytrý dům'. Komponentu naimportuj a vlož do kontejneru v hlavní aplikaci.


const Header = ({title}) =>
    
    (<header className="header">
      <h1 className="header__title">Chytry dum</h1>
    </header>);


export default Header;