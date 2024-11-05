import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-2">
      <h1 className="font-bold">Welcome to Remix</h1>
      <p>
        Visit{" "}
        <a href="https://remix.run/start/quickstart">
          remix.run/start/quickstart
        </a>{" "}
        to read the documentation
      </p>
    </div>
  );
}
