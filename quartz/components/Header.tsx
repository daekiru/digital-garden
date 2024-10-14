import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? (
    <header>
      {/* Add the icon image here */}
      <img src="/static/icon.png" alt="Icon" style={{ height: "50px", marginRight: "1rem" }} />
      {children}
    </header>
  ) : null;
};

Header.css = `
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem 0;
    gap: 1.5rem;
  }

  header h1 {
    margin: 0;
    flex: auto;
  }
`;

export default (() => Header) satisfies QuartzComponentConstructor;

