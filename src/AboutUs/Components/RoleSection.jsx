import React from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material';

const RoleSection = () => {
  return (
    <>
      <div className="my-[50px]"></div>
      <div className="flex flex-col ml-10">
        <h2 className='font-extrabold text-left ml-10 text-2xl'>Meet The Team</h2>
        <div className="w-full mx-auto mt-24 flex justify-center items-center">
            {/* Card Role 1 */}
            <Card className="w-[300px] h-[250px] mr-8 relative ring-offset-2 ring-2 shadow-lg shadow-lime-600">
                <Box className="w-full h-[150px] bg-gray-300 rounded-t-md flex justify-center items-center">
                <Typography variant="h5" className="font-semibold text-center">Role 1</Typography>
                </Box>
                <CardContent className="flex flex-col justify-center items-center">
                <Typography variant="h6" className="font-light text-center">SARA TAHIRI</Typography>
                <Typography variant="body1" className="font-light text-center">role name example</Typography>
                </CardContent>
            </Card>

            {/* Card Role 2 */}
            <Card className="w-[300px] h-[250px] mr-8 relative ring-offset-2 ring-2 shadow-lg shadow-lime-600">
                <Box className="w-full h-[150px] bg-gray-300 rounded-t-md flex justify-center items-center">
                <Typography variant="h5" className="font-semibold text-center">Role 2</Typography>
                </Box>
                <CardContent className="flex flex-col justify-center items-center">
                <Typography variant="h6" className="font-light text-center">SARA TAHIRI</Typography>
                <Typography variant="body1" className="font-light text-center">role name example</Typography>
                </CardContent>
            </Card>

            {/* Card Role 3 */}
            <Card className="w-[300px] h-[250px] mr-8 relative ring-offset-2 ring-2 shadow-lg shadow-lime-600">
                <Box className="w-full h-[150px] bg-gray-300 rounded-t-md flex justify-center items-center">
                <Typography variant="h5" className="font-semibold text-center">Role 3</Typography>
                </Box>
                <CardContent className="flex flex-col justify-center items-center">
                <Typography variant="h6" className="font-light text-center">SARA TAHIRI</Typography>
                <Typography variant="body1" className="font-light text-center">role name example</Typography>
                </CardContent>
            </Card>

            {/* Card Role 4 */}
            <Card className="w-[300px] h-[250px] relative ring-offset-2 ring-2 shadow-lg shadow-lime-600">
                <Box className="w-full h-[150px] bg-gray-300 rounded-t-md flex justify-center items-center">
                <Typography variant="h5" className="font-semibold text-center">Role 4</Typography>
                </Box>
                <CardContent className="flex flex-col justify-center items-center">
                <Typography variant="h6" className="font-light text-center">SARA TAHIRI</Typography>
                <Typography variant="body1" className="font-light text-center">role name example</Typography>
                </CardContent>
            </Card>
        </div>
      </div>
    </>
  )
}

export default RoleSection
