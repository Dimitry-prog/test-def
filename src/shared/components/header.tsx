import { HEADER_LINKS } from '@/shared/lib/constants.ts';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button.tsx';

const Header = () => {
  return (
    <header className="sticky flex items-center justify-center py-5">
      <nav>
        <ul className="flex gap-4">
          {HEADER_LINKS.map((link) => (
            <li key={link.href}>
              <Button asChild variant="link">
                <Link to={link.href}>{link.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
