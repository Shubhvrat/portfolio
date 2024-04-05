import proj from './project1.jpg';
function Project()
{
    return (
        <div>
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-center dark:text-white mt-44">Projects</h1>
            

        
<div class="flex justify-center">
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-24 ml-24">
    <a href="#">
        <img class="rounded-t-lg" src={proj} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">HowerME</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">HoverMe is a simple application built using HTML,CSS and JavaScript </p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            
<span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-2.5 h-2.5 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>HTML</span>
<span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-2.5 h-2.5 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>CSS</span>
<span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-2.5 h-2.5 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>JavaScript</span>


        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-24 ml-24">
    <a href="#">
        <img class="rounded-t-lg" src={proj} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ExamCell</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A simple project created to perform CRUD operation custom exception using PhP , with bootstrap UI.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            
<span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-2.5 h-2.5 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>HTML</span>
<span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-2.5 h-2.5 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>Bootstrap</span>
<span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-2.5 h-2.5 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>PHP</span>


        </a>
    </div>
</div>
</div>
         
        </div>
    )
}

export default Project