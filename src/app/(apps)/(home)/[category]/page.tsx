interface Props {
  params: Promise<{
    category: string;
  }>;
}

const Page = async ({ params }: Props) => {
  const { category } = await params;

  return <div>Category: {category}</div>;
};

// http://localhost:3000/education

export default Page;
