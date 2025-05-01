import React from 'react'
import { HeroHeader } from "@/components/hero5-header";

const page: React.FC = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-100'>
        <HeroHeader />
        <div className="flex relative pt-24 md:pt-36">
          <div className="w-[25%] h-[calc(100vh-64px)] bg-gray-100 fixed left-0 overflow-y-auto p-8">
            <h3 className="text-lg font-semibold mb-4">Related articles</h3>
            <nav className="space-y-2">
            <a href="#start-outreachsheet" className="block text-gray-700 hover:text-blue-600">How can I start with OutreachSheet?</a>
              <a href="#fetch-multiple-profiles" className="block text-gray-700 hover:text-blue-600">How can I fetch multiple profiles from Sales Navigator search in bulk?</a>
              <a href="#fetch-people-linkedin" className="block text-gray-700 hover:text-blue-600">How can I fetch people from LinkedIn?</a>
              <a href="#fetch-single-linkedin-profile" className="block text-gray-700 hover:text-blue-600">How can I fetch a single LinkedIn profile?</a>
            </nav>
          </div>
          
          <div className="fixed right-0 w-[75%] h-[calc(100vh-64px)] overflow-y-auto p-6 bg-white flex flex-col gap-4">
            <div id="start-outreachsheet">
              <h1 className="text-3xl font-bold mb-4 py-4">How I start with OutreachSheet?</h1>
              <iframe 
                src="https://scribehow.com/embed/How_to_Download_OutreachSheet_Extension__7Jz6DQkDRgaS_UdwD1nIhA?as=scrollable" 
                width="100%" 
                height="600px"
                allowFullScreen
                style={{border: 0}}
              />  
            </div>
            <div id="fetch-multiple-profiles">     
              <h1 className="text-3xl font-bold mb-4 py-4">How can I fetch multiple profiles from Sales Navigator search in bulk?</h1>
              <iframe 
                src="https://scribehow.com/embed/How_can_I_fetch_multiple_profiles_from_Sales_Navigator_search_in_bulk__bJGyYAPaRdWfvS90HfraZQ?as=scrollable" 
                width="100%" 
                height="600px"
                allowFullScreen
                style={{border: 0}}
              />  
            </div>
            <div id="fetch-people-linkedin">
              <h1 className="text-3xl font-bold mb-4 py-4">How can I fetch people from LinkedIn?</h1>
              <iframe 
                src="https://scribehow.com/embed/How_can_I_fetch_people_from_Linkedin__oR-_vQ-lRsG2g3zlk5rHig?as=scrollable" 
                width="100%" 
                height="600px"
                allowFullScreen
                style={{border: 0}}
              />  
            </div>
            <div id="fetch-single-linkedin-profile">
              <h1 className="text-3xl font-bold mb-4 py-4">How can I fetch a single LinkedIn profile?</h1>
              <iframe 
                src="https://scribehow.com/embed/How_can_I_fetch_a_single_LinkedIn_profile___qkekGXESfGS5s3D5jDvsg?as=scrollable" 
                width="100%" 
                height="600px"
                allowFullScreen
                style={{border: 0}}
              />  
            </div>
          
            </div>
        </div>
      </div>
    </> 
  )
}

export default page