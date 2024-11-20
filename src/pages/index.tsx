export default function HomePage({ message }: { message: string }) {
  return (
    <div>
      <div>{message}</div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      message: ctx.query.message,
    },
  };
};
