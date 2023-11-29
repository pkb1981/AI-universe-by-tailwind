// loading tools from api
const loadTools = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const dataTools = data.data.tools;
    displayTools(dataTools);
    // console.log(dataTools);
}

// display tools from api
const displayTools = (tools) => {
    // console.log(tools);
    // step.1
    const toolsContainer = document.getElementById('tools-container');
    tools.forEach(tool => {
        // console.log(tool)
        // step-2
        const toolsDiv = document.createElement('div');
        toolsDiv.classList = `card bg-gray-100 shadow-xl`;
        // step-3
        toolsDiv.innerHTML = `<figure class="px-10 pt-10">
        <img src="${tool.image}" alt="images" class="rounded-xl" />
        </figure>
        <div class="card-body  text-left">
            <h1 class="card-title text-2xl">Features</h2>
            <ol>
            <li>1.${tool.features[0]}</li>
            <li>2.${tool.features[1]}</li>
            <li>3.${tool.features[2]}</li>
            </ol>
            <hr>  
            <h1 class="text-2xl">${tool.name}</h1>
            </div>
            <div class="card-actions justify-end pr-8">
            <button onclick="loadToolsModal('${tool.id}')"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentcolor" class="w-6 h-6 text-[#EB5757]">
                <path stroke-linecap="round" stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg></button>
            </div>
            <div class="flex gap-2 pl-8 pb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>${tool.published_in}</p>
    
        </div>`;
        // step-4
        toolsContainer.appendChild(toolsDiv);
    });
}



// load modal function for details
const loadToolsModal = async (id) => {
    // console.log('clicked', id);
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    const tool = data.data;

    showToolsModal(tool);
}


//display modal function for details
const showToolsModal = (tool) => {
    console.log(tool);
    const toolDescription = document.getElementById('tool-description');
    toolDescription.innerText = tool.description;
    const modalContainer = document.getElementById('show-details-modal-container');
    modalContainer.innerHTML = `
            <div class="py-4 flex px-4 gap-4 font-medium">
                <p class="bg-slate-50 text-[#03A30A] rounded-md text-center justify-center w-18 h-14">${tool.pricing[0].price}</br>${tool.pricing[0].plan}</p>
                <p class="bg-slate-50 text-[#F28927] rounded-md text-center justify-center w-18 h-14">${tool.pricing[1].price}</br>${tool.pricing[1].plan}</p>
                <p class="bg-slate-50 text-[#EB5757] rounded-md text-center justify-center w-18 h-18">${tool.pricing[2].price}</br>${tool.pricing[2].plan}</p>
            </div>

       <div class="flex px-4 gap-4">
        <div>
            <h1 class="text-xl">Features</h1>
            <ul class="list-disc"><li>${tool.features[1].feature_name}</li>
                <li>${tool.features[2].feature_name}</li>
                <li>${tool.features[3].feature_name}</li>
            </ul>
        </div>
        <div>
            <h1 class="text-xl">Integration</h1>
            <ul class="list-disc"><li>${tool.integrations[0]}</li>
                <li>${tool.integrations[1]}</li>
                <li>${tool.integrations[2]}</li>
            </ul>
        </div>

    </div>
    `;
    const showModalImage = document.getElementById('modal-image');
    showModalImage.innerHTML = `<img src="${tool.image_link[0]}">
    <h2 class="text-2xl">${tool.input_output_examples[0].input}</h2>
    <p>${tool.input_output_examples[0].output}</p>`;
    // modal button function
    show_details_modal.showModal();
}


loadTools();