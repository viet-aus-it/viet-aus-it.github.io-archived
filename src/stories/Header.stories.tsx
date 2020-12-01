import RenderLayout from '../components/Template/Layout/RenderLayout';
import Header from '../components/Template/Header';

export default {
  title: 'Header',
  component: Header,
};

const title = 'Viet-Aus-IT Blog';

export const HeaderRootPath = () => (
  <RenderLayout>
    <Header isRootPath title={title} />
  </RenderLayout>
);

export const HeaderNonRoot = () => (
  <RenderLayout>
    <Header isRootPath={false} title={title} />
  </RenderLayout>
);
