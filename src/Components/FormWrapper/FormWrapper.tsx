import './formWrapper.css';

type FormWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className='titleHeader'>{title}</h2>
      <div className='childrenContainer'>{children}</div>
    </>
  );
}
