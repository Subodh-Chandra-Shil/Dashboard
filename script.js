const mainPage = document.getElementById('main-page');
const mainPageContent = mainPage.innerHTML;

function launch(param) {
    if (param == 'profile')
        mainPage.innerHTML = mainPageContent;
    if (param == 'calculator')
        calculatorContents();
    if (param == 'news')
        newsContents();
}

function calculatorContents() {
    mainPage.innerHTML = `
    <main class="z-[100]">
        <section class="lg:flex lg:flex-row justify-around sm:flex sm:flex-col">

            <!--! Money Card  -->
            <div class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4 w-[440px] sm:w-shadow-xl shadow-[grey] mx-auto">
                <h2
                    class="text-3xl mb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-teal-100 text-center">
                    Income</h2>

                <div class="flex flex-row justify-between mb-8">
                    <label for="">Earning: </label>
                    <input type="text" class="outline-1 outline-emerald-100 outline-offset-0" id="earning" required>
                </div>

                <h2
                    class="text-3xl mb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-teal-100 text-center">
                    Expenses</h2>

                <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-col">
                        <label class="mb-3" for="">Food: </label>
                        <label class="mb-3" for="">Rent: </label>
                        <label class="mb-3" for="">Clothes: </label>
                    </div>

                    <div class="flex flex-col">
                        <input id="food" type="text"
                            class="expenses rounded-lg drop-shadow-lg outline-1 outline-emerald-100 outline-offset-0 mb-3"
                            required>
                        <input id="rent" type="text"
                            class="expenses rounded-lg drop-shadow-xl outline-1 outline-emerald-100 outline-offset-0 mb-3"
                            required>
                        <input id="clothes" type="text"
                            class="expenses rounded-lg drop-shadow-xloutline-1 outline-emerald-100 outline-offset-0 mb-3"
                            required>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center">

                    <div class="flex flex-col justify-center items-center">
                        <button id="calculation"
                            class="p-[8px] transition duration-700 ease-in-out border rounded-lg w-fit bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:drop-shadow-2xl border-0">Calculate</button>
                        <h2 class="mt-12">Total Expenses: <span id="total-expenses">&#2547; 0</span></h2>
                        <h2>Remain Balance: <span id="remain-balance">&#2547; 0</span></h2>
                    </div>

                    <div class="flex flex-col justify-around items-center w-full mt-5">
                        <div class="flex flex-col justify-center items-center w-full">
                            <h2
                                class="text-3xl mb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-teal-100">
                                Save On Income </h2>
                            <div class="flex flex-row justify-around w-full">
                                <label for="text">Save: </label>
                                <input id="saving-percent"
                                    class="h-[30px] px-2 rounded-lg outline-1 outline-green-500 outline-offset-0"
                                    type="text" placeholder="0">
                                <span>%</span>
                                <button id="saving-amount-btn"
                                    class="border rounded-md h-[30px] w-[70px] border-2 hover:border-black">Save</button>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                            <h2 class="mt-5">Saving Amount: &#2547; <span id="saving-amount"> 0</span></h2>
                            <h2>Balance: &#2547; <span id="last-balance">0</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `;
}


function newsContents() {
    mainPage.innerHTML = `
        <main id="news-container"></main>
    `;
    fetchNews();
}

function fetchNews() {
    const apiKey = 'c5bf0d11d8a84bb5931e0d6cbc8ecbad';
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c5bf0d11d8a84bb5931e0d6cbc8ecbad';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            let output = '';

            articles.forEach(article => {
                output += `

                    <article style="background-color: #16325B; padding:6px; margin:10px; color: 'white'; border-radius: 10px;">

                        <h1 style="font-weight: bold; color:white;">${article.title}</h1>

                        <div style="display:flex; gap: 10px; margin:10px; "> 
                            <p style="border:1px solid; width:fit-content; 
                            border-radius:3px; color:white; padding:3px;">${new Date(article.publishedAt).toLocaleDateString()}</p>
                            <a style="color:white; border:1px solid; width:fit-content; border-radius: 3px;  padding:3px;" href="${article.url}" target="_blank" class="read-more">Read more</a>
                        </div>

                    </article>
                `;
            });

            document.getElementById('news-container').innerHTML = output;
        })
        .catch(error => console.log('Error fetching the news:', error));
}
