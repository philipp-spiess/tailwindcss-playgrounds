import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="p-2">
      <h1 className="font-bold">Welcome to React Router</h1>
      <p>
        Visit{" "}
        <a href="https://reactrouter.com/start/home">
          reactrouter.com/start/home
        </a>{" "}
        to read the documentation
      </p>
    </div>
  );
}
