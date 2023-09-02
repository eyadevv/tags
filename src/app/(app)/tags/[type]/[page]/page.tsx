const page = async ({ params }: { params: { page: string; type: string } }) => {
  const TYPE = params.type;
  const PAGE = params.page;
  return <div>{params.page}</div>;
};
export default page;
