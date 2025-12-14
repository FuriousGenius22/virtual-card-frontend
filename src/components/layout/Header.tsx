import Button from "./Button";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">e.PN</h1>
      </div>

      <nav className="header-right">
        <Button>Login</Button>
        <Button className="primary">Sign Up</Button>
      </nav>
    </header>
  );
}
