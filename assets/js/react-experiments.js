ReactDOM.render(
    <div>
        <h1>Hello</h1>
        <p>Mother Father</p>
        <p>{{ site.data.l10n.t[page.lang].HelloMotherFather }}</p>
    </div>,
    document.getElementById('react-app')
);
