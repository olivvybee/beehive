import { Link } from '@/components/Link';

const NotFound = () => (
  <>
    <h2>Not found</h2>

    <p>That page doesn't seem to exist.</p>

    <p>
      Try going back to the <Link href="/">homepage</Link>, or the list of{' '}
      <Link href="/blog">blog posts</Link>.
    </p>
  </>
);

export default NotFound;
