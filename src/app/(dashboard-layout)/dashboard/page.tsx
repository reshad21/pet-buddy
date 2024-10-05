import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  const userImage = session?.user?.image ?? "/default-image.png";
  return (
    <>
      {session?.user && (
        <div>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <p className="text-center">Email:{session?.user?.email}</p>
          <Image
            src={userImage}
            width={200}
            height={200}
            alt="user image"
            className="mx-auto rounded-full"
          />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
