import '../App.css';

export default function Footer() {
  return (
    <footer className="secondary text-gray-200 py-6">
      <p className="text-center">© {new Date().getFullYear()} Jack Shylo — All Rights Reserved</p>
    </footer>
  );
}
