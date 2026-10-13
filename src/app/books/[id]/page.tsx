import React from 'react';



interface IBookProps {
  params:Promise< {
    id: string;
  }>;
}

const page = async ({ params }: IBookProps) => {
    const {id}= await params;
    console.log(id);

    return (
        <div>
            <h2>Books details Page</h2>
            
        </div>
    );
};

export default page;