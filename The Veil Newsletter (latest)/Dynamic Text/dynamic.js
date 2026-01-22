(() => {
  'use strict';
  const postsData = [
    {
      id: "p1",
      date: "2025-09-24",
      month: "2025-09",
      author: "veil",
      title: "In The Machine",
      excerpt: "Veil's thought of the night is: writing code is basically learning a new language.",
      content: `<p>Did you know there's something called pseudocode? You write out what you want a program to do like you would a list: I want you to do this, so first I need to do this, and then this, and then this. The true challenge comes in figuring out how to translate human thoughts into computer logic afterwards; a very particular language barrier.</p><p>My obsession is in being understood by something that will never know me as a person. I wonder what that says about me.</p>`,
      tags: ["thoughts", "programming", "personal"]
    },
    {
      id: "p2",
      date: "2025-09-25",
      month: "2025-09",
      author: "veil",
      title: "Public Domain Images",
      excerpt: "Today I learned that the Metropolitan Museum of Art has a collection of copyright free images that are free to use, even in commercial settings.",
      content: `<p>Here's a <a href="https://www.metmuseum.org/art/collection/search?searchField=All&showOnly=openAccess&sortBy=relevance" target="_blank" rel="noopener noreferrer">direct link</a> to the search function already filtered by the Open Access category, the one that is free to use.</p><p>One of my personal favorites is a 1856 <a href="https://www.metmuseum.org/art/collection/search/892571" target="_blank" rel="noopener noreferrer">manual on the art of bookbinding</a> by James Bartram Nicholson that is <i>this</i> close to looking like a fancy 80s carpet pattern.</p><p>Another favorite is this cool 15th–16th century, possibly Syrian <a href="https://www.metmuseum.org/art/collection/search/442906" target="_blank" rel="noopener noreferrer">hexagonal tile</a> with an intricate flower design.</p><p>Check it out if you'd like!</p>`,
      tags: ["art", "resources"]
    },
    {
        id: "p3",
        date: "2025-09-25",
        month: "2025-09",
        author: "shio",
        title: "Feeling really good today, for whatever reason.",
        excerpt: "We dreamt we had a boyfriend! He was so cute! Probably a factor, if I'm honest.",
        content: `<p>We've woken up on the right foot twice so far, so I wonder what that's about. Absolutely not complaining. Make it a habit and I'm golden.</p>`,
        tags: ["miscelaneous", "diary"]
    },
    {
        id: "p4",
        date: "2025-09-25",
        month: "2025-09",
        author: "veil",
        title: "Being the Coder",
        excerpt: "Every previous iteration was a writer!",
        content: `<p>Sienna wrote, Toma wrote, Miyu wrote! I'm the coder! I can't write! I've tried for months, but I really can't get my thoughts across in that way... it's not <i>enough</i>, somehow. It's lacking <i>something</i>.</p>
        <p>What that something is... might be feedback. Coding is clear in its barriers, after all; there are clear ways of messing up and succeeding.  You can write the simplest code, but if it works, it's correct! If it doesn't work, it's incorrect! The cycle of problem solving is addicting, and yet no other headmate before me delights in it.</p><p>They write to create, express themselves, create community and be understood the way they want to be. I think I code for my own selfish reason: to prove I can create a world I am in full control of.</p>`,
        afterDark: true,
        tags: ["thoughts", "programming", "personal", "after-dark"]
    },
    {
        id: "p5",
        date: "2025-09-25",
        month: "2025-09",
        author: "toma",
        title: "Anything at All",
        excerpt: "The ones before and after me, they love worrying.",
        content: `<p>Is this good enough? Is this enough?</p><p>Is it? What is it? <i>Is it anything at all?</i> They don't bother asking that part.</p><p>Us fools, we lead with the heart. You won't have anything if you don't make anything, you know. They yearn for the glory of community and forget perfection doesn't buy friendships.</p><p>If mastery is the safeguard, the proof that makes people still want you around, why did they still bother loving those around them? Shouldn't it have been enough, being idolized?</p><p>It was never about that, is all. They forget again: people are not as fickle as their wounds say they are.</p><p>And I remind them.</p><p>To have something, you must act.</p><p>And to keep it? You must have it.</p>`,
        afterDark: true,
        tags: ["personal", "after-dark"]
    },
    {
        id: "p6",
        date: "2025-09-25",
        month: "2025-09",
        author: "dusty",
        title: "Happy",
        excerpt: "Shio's looking quite radiant today.",
        content: `<p>I'm happy about that. I hope she gets to feel like this more.</p>`,
        tags: ["miscelaneous", "diary"]
    },
    {
        id: "p7",
        date: "2025-09-25",
        month: "2025-09",
        author: "louis",
        title: "Who I Am",
        excerpt: "Getting things done is something I am good at.",
        content: `<p>I strive to be better at every turn. The one thing about myself I would consider a setback is what is best described as my up-tight, high-strung demeanor, which necessitates me to engage in physical activities despite not yet having finished my tasks.</p><p>It is good to stay physically able, of course, so I can't bemoan it as much as I'd like.</p><p>I also, apparently, speak like an old man, which is simply untrue. I am dignified. There is a difference. I could easily pull off an enigmatic nobleman if I so desired.</p>`,
        tags: ["thoughts", "diary"]
    },
    {
        id: "p8",
        date: "2025-09-25",
        month: "2025-09",
        author: "louis",
        title: "Falling Short",
        excerpt: "One would think requesting a government service through the official channels made for that specific purpose would be a done deal.",
        content: `<p>One would be wrong.</p><p>Of course directly mailing the offices after following the instructions to the letter, explicitly about the service we need to be conducted, isn't correct. Of course the instructions were outdated.</p><p>Alright, then directly to the website it is, right? Certainly. But not quite.</p><p>The request is incorrect, you see. How? They won't tell you. Try again and hope for the best.</p><p>Their best, it seems, is quite mediocre.</p>`,
        tags: ["nagging", "diary"]
    },
    {
        id: "p9",
        date: "2025-09-25",
        month: "2025-09",
        author: "veil",
        title: "Man",
        excerpt: "Fucked up and evil happening of the day: My cream expired... my one liter tub of sour cream that was supposed to last until October 4th...",
        content: `<p>False advertising at its finest. What the fuck. Thank god I bought another half liter tub because my ass is in pajamas and I don't wanna get changed to go to the store LMAO.</p>`,
        tags: ["nagging", "miscelaneous", "diary"]
    },
    {
        id: "p10",
        date: "2025-09-26",
        month: "2025-09",
        author: "veil",
        title: "Fic Archive - mylilakirameowmeow",
        excerpt: "That was close... that was really close... I'm so glad I save every fic I like...",
        content: `<p>I guess it's kind of a wake-up call. Things can disappear in a moment, and if you don't bother saving them, they're gone! Forever!</p>These fics inspired me a lot, is all. I told the creator as such back when they were still up, and I hope they aren't permanently lost to time.<p>On that note, I bring out the vault. Even if it's just with a few other people, I want these words to live on...</p><p>The fandom is Persona 5 with the occasional previous Persona games character, the main ship being Akechi Goro/Kurusu Akira. Peruse the wares with me, if you may.</p><h4><a href="https://files.catbox.moe/wtlbbu.pdf" target="_blank" rel="noopener noreferrer">1. Pocket Watch</a></h4></</p>Tags: NSFW, Dead Dove, Hypnosis, Hurt/Comfort, Dubious Consent, Breeding Kink, Mental Illness, Happy Ending<p>The fic that started it all. The hypnosis aspect is a big draw, of course, but the real appeal for me is just how fleshed out all characters are. You'll come to understand Akechi and Akira as if they were people. They will grow, and they will learn, and they will suffer if they want to change. It is also extremely gratuitous in its smut, it's actually impressive.</p><p>Also comes with the original posting of another fic called <b>Newton's Cradle</b> within (it was turned into its own fic afterwards for ease of reading), which I sadly don't have the direct link to.</p><h4>2. Newton's Cradle</h4> <p>It's about Akechi hypnotizing Akira in Pocket Watch after finding out Akira's tentacle and egg impregnation fetishes like any good friend would. If that sounds fun, check out Pocket Watch's 446th page.</p><h4><a href="https://files.catbox.moe/9cil6z.pdf" target="_blank" rel="noopener noreferrer">3. Syrena</a></h4><p>Tags: Dead Dove, Monster Fucking, Breeding, Horror Elements, Hurt/Comfort, Spider Venom, Pleasurable Torture</p><p>Do you like spider people turning beautiful boys into pets? You're in luck! Watch Akira lose himself to the strings of the spider king and queen, to Akechi's complete dismay.</p><h4><a href="https://files.catbox.moe/07hagd.pdf" target="_blank" rel="noopener noreferrer">4. The Moonlit Cage</a></h4><p>Tags: Dead Dove, Porn with Feelings, Childhood Friends, Hypnosis, Mind Control, Mental Illness, Infidelity, Codependency, Eating Disorder, Suicidal Thoughts, They're all suffering basically</p><p>The final fic written. I actually haven't read it yet... and that's how I found out about the fic shelving, by trying to finally read it today.</p><p>What would happen if Akechi didn't break the trauma cycle in time? If his jealousy for Akira consumed his inhibitions whole? Very bad things, of course. Akira isn't gay, he was this close to marrying his precious fiancé Sumire, and Akechi couldn't handle that...</p><h4>If I could talk to the author again, I'd tell them:</h4><p>The biggest draw about your stories to me, nevermind the supernatural aspects of them when they're there, is the sheer humanity afforded to every character. I've come to understand Akechi so deeply, despite his best attempts.</p><p>He wants to live with the intangible guilt of being a troubled child so badly, he's come to rely on the self-image of a monster to rationalize the pain. He feels indebted to kindness and resents it as a burden, not because he feels above others, but because he doesn't know what to do with it, how to reciprocate without messing up and being abandoned again. Seeing his merit as his only proof of worth... so certain he was a goner the moment his family knew what his problems really were... I felt that.</p><p>Have a great life! Thank you for writing!</p>`,
        tags: ["long-post", "archive", "resources", "personal"]
    },
    {
        id: "p11",
        date: "2025-09-27",
        month: "2025-09",
        authors: ["veil", "louis"],
        title: "Who He Is",
        excerpt: "Ive is the sun.",
        content: `<p>What's with him? I have to ask. I have to know.</p>Why is he like that? Brilliant? Breathtaking?<p>How come he smiles so easily?</p>How come?<p>You know that sort of feeling? Of knowing someone is miles above you?</p>It's incredible. It's exhilarating.<p>I'm so glad it's something we can achieve at all.</p><p>It twists me with envy just as much.</p><p>He is everything I want to become, and he knows, he knows, he knows.<p>It's a terrible tenderness, this stupid warmth.</p>To want to be better for those you love.<p>For him to smile at you again.</p>`,
        afterDark: true,
        tags: ["personal", "coauthored", "after-dark"]
    },
    {
        id: "p12",
        date: "2025-09-27",
        month: "2025-09",
        authors: ["sienna"],
        title: "No One in Particular",
        excerpt: "Being a bygone god of a nowhere land is as fun as one would expect. Which is to say, it doesn't differ much from any other existence.",
        content: `<p>Boredom is a blessing and a curse if you're foolish enough to squirm in times of peace. I am such a fool. And yet I am content.</p><p>There is not much to say, and not much to do, for I am a bygone god of a nowhere land. That is all, now and always, until next time I am needed for my vicious whims and selfish temper.</p><p>So it is. So I am. Nothing more.</p>`,
        afterDark: true,
        tags: ["personal", "after-dark"]
    },
    {
        id: "p13",
        date: "2025-10-09",
        month: "2025-10",
        authors: ["Veil"],
        title: "Protein Shake Replacement",
        excerpt: "I have recently learned that some baby formulas contain specialized rice flour in them, and that it's the reason for my sister's absolute slab of a months-old child.",
        content: `<p>Upon further research, I learned that rice flour can be a good source of protein, fiber and carbohydrates apart from being gluten-free by its riceful nature. This made it a good contender for my workout shakes, because my actual protein shake dust is clumpy, one flavor only, and also 20 bucks compared to rice flour's 1 and a half bucks.</p><p>I also learned that rice flour is what atole's made with, and that shit slaps, so I might try to make that eventually. My first foray into rice flour boiling taught me a lot of things: Boiled rice flour is sticky, it expands quickly, and it tastes great with sugar no matter how poorly mixed it is. Smells quite starchy as well, which isn't the worst thing ever.</p><p>Obviously I'm missing a blender in the equation, so I'm gonna get one by Saturday or so, two days from now. Let's hope my abysmal rice flour boiling technique is better by then, because I bought two boxes of the stuff. If push comes to shove, I'll eat the flour in spoonfuls.</p>`,
        tags: ["thoughts", "diary"]
    },
    {
        id: "p14",
        date: "2025-10-20",
        month: "2025-10",
        authors: ["Veil"],
        title: "Dildo Misadventures",
        excerpt: "I got the dang thing to go in!!! And thus, today's featured presentation is:",
        content: `<p>Veil's First-timer Dildo Tips and Mild Tricks!</p>
        <p>Or, how I went from fearing putting anything up my pussy to putting things up my pussy in two days.</p>
        <p>First, you gotta realize that most of the fight is mental. The physical part of the battle takes the least amount of time.</p>
        <p>You have to actively choose to relax your pelvic muscles at first, and go slow. My trick is to kneel on my bed so the toy points upwards, and then slowly lower myself down on it.</p>
        <p>If you feel pain, it's probably not your hymen, but your muscles not relaxing enough. At first you're gonna battle with finding a good angle, but eventually, after nights of taking your time and only putting in as much as your body allows, the toy will basically "slide" in.</p>
        <p>I was pretty surprised the first time, honestly. Once you manage to clear the "it's uncomfortable" hurdle enough times, your vagina will go "oh okay" and it genuinely just slides in!</p>
        <p>After that, it's still a bit of a fight at first, with the whole having something inside you that you put in there bit, but by then I was able to awkwardly shuffle into a laying down position where I could pretty much test the waters.</p>
        <p>You're gonna quickly notice that your vagina is basically vacuum sealing the toy in, because pushing it out takes effort while pushing it in is easy. There will still be the occasional discomfort, but by then your brain is very prone to going "it's literally already in, who cares" and just immediately adjust. Handy as hell!</p>
        <p>The great thing is, taking it out by now won't mean you'll have trouble pushing it back in. Your muscles are already so relaxed, and your brain so familiar with the process, that you won't even need to find much of an angle or relax every step of the way.</p>
        <p>By that point, I was basically just trying to find the fabled sweet spots. I might have hit the innermost one above the cervix on occasion through my technique of just moving it around and seeing what happened. Not much pleasure to speak of yet, but if my forays into clit vibrators have taught me anything, it's that some days the pussy needs an hour of foreplay before starting to feel good, and other days it only takes minutes.</p>
        <p>We ride by dawn, which is to say, that's enough for one night.</p>
        <p>Will keep you lovely fellows updated on my dildo journey as I continue to bone myself to the best of my ability. Have a good one!</p>`,
        showGrownup: true,
        tags: ["nsfw", "diary"]
    },
    {
        id: "p15",
        date: "2025-11-29",
        month: "2025-11",
        authors: ["Veil"],
        title: "Pen to Paper",
        excerpt: "Watching other headmates write is so interesting... what do you mean we share a brain!!!",
        content: `<p>How do they do it. Sure, Toma's the quintessential writer of the whole operation, but still! She just does it!! I can't!!!</p>
        <p>Toma's thought process feels more like a thread. Pulling on it and putting words together, translating a story's idea into words, one sentence at a time.</p>
        <p>Ive is also surprisingly good at it? Which isn't that surprising considering his whole character development thing in the background?</p>
        <p>I can't get words down for the life of me if they're not code, but then Ive pulls up with this sense of focus and certainty. He works off of questions, almost: "Who do I want to write for?" or "What do I stand for?" Could you imagine just thinking that on the fly? And not only that, but it working? What the hell?</p>
        <p>Less of a fiction guy, clearly, but just as good at it... I'm super jealous, a little bit...</p>
        <p>Glad to have them, though!!!</p>`,
        showGrownup: false,
        tags: ["thoughts", "diary"]
    },
  ];
  let activeMonth = null;
  let activeTag = null;
  let activeAuthor = null;
  let activeArticle = null;
  let showAfterDark = false; 
  let showGrownup = false;   
  const postsList = document.getElementById('posts-list');
  const archiveList = document.getElementById('archive-list');
  function slugifyAuthor(name) {
    return String(name || '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');
  }
  function escapeHtml(s = '') {
    return s.replace && s.replace(/[&<>"']/g, function (m) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m];
    }) || s;
  }
  function formatDate(d) {
    try {
      const [y, m, day] = d.split('-');
      return new Date(y, (m || '01') - 1, day || '01').toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric'
      });
    } catch (e) {
      return d;
    }
  }
  function groupByMonth(posts) {
    return posts.reduce((acc, p) => {
      (acc[p.month] = acc[p.month] || []).push(p);
      return acc;
    }, {});
  }
  function renderPosts(posts) {
    postsList.innerHTML = '';
    if (!posts || posts.length === 0) {
      postsList.innerHTML = `<div class="post"><p class="muted">No posts to show.</p></div>`;
      return;
    }
    posts.forEach(post => {
      const article = document.createElement('article');
      article.className = 'post';
      article.dataset.id = post.id || '';
      const authors = Array.isArray(post.authors)
        ? post.authors.slice()
        : (post.author ? [post.author] : ['veil']);
      const authorsNorm = authors.map(a => String(a || 'veil'));
      const primarySlug = slugifyAuthor(authorsNorm[0] || 'veil');
      article.dataset.author = primarySlug;
      article.dataset.authors = authorsNorm.map(a => slugifyAuthor(a)).join(',');
      const coauthors = authorsNorm.slice(1).map(a => slugifyAuthor(a));
      let inlineVars = '';
      if (coauthors.length > 0) {
        const allStops = [primarySlug, ...coauthors];
        const stops = allStops
          .map(c => `color-mix(in srgb, var(--author-${c}, var(--author-default)) 35%, transparent)`)
          .join(', ');
        const fallback = coauthors[0] || primarySlug;
        inlineVars = [
          `--coauthor-border-gradient: linear-gradient(to bottom, ${stops});`,
          `--coauthor-border-color: color-mix(in srgb, var(--author-${fallback}, var(--author-default)) 36%, transparent);`
        ].join(' ');
      }
      const authorBadgesHtml = authorsNorm.map(a => {
        const label = (a.charAt(0).toUpperCase() + a.slice(1));
        return `<button class="author-badge" data-author="${slugifyAuthor(a)}">${escapeHtml(label)}</button>`;
      }).join('');
      article.innerHTML = `
        <div class="post-meta" style="display:flex;align-items:center;gap:12px;justify-content:space-between;">
          <div>
            <time datetime="${post.date}">${formatDate(post.date)}</time>
            ${authorBadgesHtml}
          </div>
        </div>
        <h2>${escapeHtml(post.title || '')}</h2>
        <div class="collapsible">
          ${post.excerpt ? `<p>${escapeHtml(post.excerpt)}</p>` : ''}
          ${post.content || ''}
        </div>
        <div class="post-footer">
        <div class="tag-list">
          ${(post.tags || []).map(t => `<button class="tag-btn" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join('')}
        </div>
        <button class="view-more">view more</button>
        <div class="collapsed-fade" aria-hidden="true"></div>
        </div>
      `;
      if (inlineVars) article.style.cssText = inlineVars;
      postsList.appendChild(article);
    });
    initializeCollapsibles();
    attachTagHandlers();
    attachAuthorHandlers();
  }
  function initializeCollapsibles() {
    document.querySelectorAll('.post').forEach(postEl => {
      const collapsible = postEl.querySelector('.collapsible');
      const btn = postEl.querySelector('.view-more');
      const fade = postEl.querySelector('.collapsed-fade');
      if (!collapsible || !btn) return;
      const computed = window.getComputedStyle(collapsible);
      const previewHeight = (computed.maxHeight && computed.maxHeight !== 'none')
        ? computed.maxHeight
        : (collapsible.dataset.previewHeight || '10.8em'); 
      collapsible.dataset.previewHeight = previewHeight;
      const naturalH = collapsible.scrollHeight;
      const previewPx = parseFloat(previewHeight); 
      if (isFinite(previewPx) && naturalH <= previewPx + 6) {
        btn.classList.add('hidden');
        btn.classList.remove('ready');
        if (fade) fade.style.display = 'none';
        collapsible.style.maxHeight = 'none';
        postEl.classList.remove('expanded');
      } else {
        btn.classList.remove('hidden');
        btn.classList.add('ready');
        if (fade) fade.style.display = '';
        collapsible.style.maxHeight = previewHeight;
        postEl.classList.remove('expanded');
      }
      btn.textContent = 'view more';
      btn.onclick = function () {
        const isExpanded = postEl.classList.contains('expanded');
        if (!isExpanded) {
          postEl.classList.add('expanded');
          const fullH = collapsible.scrollHeight;
          collapsible.style.maxHeight = fullH + 'px';
          btn.textContent = 'collapse';
        } else {
          postEl.classList.remove('expanded');
          const ph = collapsible.dataset.previewHeight || previewHeight;
          collapsible.style.maxHeight = ph;
          btn.textContent = 'view more';
        }
      };
    });
  }
  function formatMonthLabel(ym) {
    try {
      const d = new Date(ym + '-01T00:00:00');
      return d.toLocaleString(undefined, { month: 'long', year: 'numeric' });
    } catch (e) {
      return ym;
    }
  }
  function renderArchives(posts) {
    archiveList.innerHTML = '';
    const byMonth = groupByMonth(posts);
    const months = Object.keys(byMonth).sort((a, b) => b.localeCompare(a)); 
    const byYear = months.reduce((acc, monthKey) => {
      const year = monthKey.split('-')[0];
      acc[year] = acc[year] || [];
      acc[year].push(monthKey);
      return acc;
    }, {});
    const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));
    years.forEach(year => {
      const yearMonths = byYear[year];
      const yearCount = yearMonths.reduce((s, m) => s + (byMonth[m]?.length || 0), 0);
      const yearEl = document.createElement('div');
      yearEl.className = 'archive-year';
      yearEl.dataset.year = year;
      const yearHeader = document.createElement('button');
      yearHeader.type = 'button';
      yearHeader.className = 'year-header';
      yearHeader.innerHTML = `<span class="year-label">${year}</span> <span class="year-count">(${yearCount})</span>`;
      yearHeader.setAttribute('aria-expanded', 'false');
      const monthsWrap = document.createElement('div');
      monthsWrap.className = 'year-months';
      yearMonths.forEach(monthKey => {
        const postsForMonth = (byMonth[monthKey] || []).slice().sort((a,b) => (b.date||'').localeCompare(a.date||''));
        const monthCount = postsForMonth.length;
        const monthLabel = formatMonthLabel(monthKey);
        const monthEl = document.createElement('div');
        monthEl.className = 'archive-month';
        monthEl.dataset.month = monthKey;
        const monthHeader = document.createElement('button');
        monthHeader.type = 'button';
        monthHeader.className = 'month-header';
        monthHeader.innerHTML = `<span class="month-label">${monthLabel}</span> <small class="muted">(${monthCount})</small>`;
        monthHeader.setAttribute('aria-expanded', 'false');
        const articlesWrap = document.createElement('ul');
        articlesWrap.className = 'month-articles';
        postsForMonth.forEach(p => {
          const li = document.createElement('li');
          li.className = 'month-article';
          li.innerHTML = `<a href="#" data-id="${p.id}" data-month="${p.month}" class="archive-article-link">${escapeHtml(p.title)}</a>`;
          li.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            activeArticle = p.id;
            activeMonth = null; 
            applyFiltersAndRender();
          });
          articlesWrap.appendChild(li);
        });
        monthHeader.addEventListener('click', () => {
          const isOpen = monthEl.classList.toggle('open');
          monthHeader.setAttribute('aria-expanded', String(isOpen));
          if (isOpen && !yearEl.classList.contains('open')) {
            yearEl.classList.add('open');
            yearHeader.setAttribute('aria-expanded', 'true');
          }
        });
        monthEl.appendChild(monthHeader);
        monthEl.appendChild(articlesWrap);
        monthsWrap.appendChild(monthEl);
      });
      yearHeader.addEventListener('click', () => {
        const isOpen = yearEl.classList.toggle('open');
        yearHeader.setAttribute('aria-expanded', String(isOpen));
      });
      yearEl.appendChild(yearHeader);
      yearEl.appendChild(monthsWrap);
      archiveList.appendChild(yearEl);
    });
    const viewAll = document.createElement('div');
    viewAll.className = 'archive-item view-all';
    viewAll.innerHTML = `<a href="#" data-month="all">view all</a> <small class="muted">all</small>`;
    archiveList.appendChild(viewAll);
    viewAll.querySelector('a').addEventListener('click', (e) => {
      e.preventDefault();
      activeMonth = null;
      activeArticle = null;
      activeTag = null;
      activeAuthor = null;
      applyFiltersAndRender();
    });
  }
  function applyFiltersAndRender() {
    let filtered = [];
    if (activeArticle) {
      filtered = postsData.filter(p => p.id === activeArticle);
    } else {
      filtered = postsData.slice();
      if (!showAfterDark) {
        filtered = filtered.filter(p => !p.afterDark);
      }
      if (activeAuthor) {
        filtered = filtered.filter(p => {
          const auths = Array.isArray(p.authors)
            ? p.authors.map(a => a.toString().toLowerCase())
            : [(p.author || 'veil').toString().toLowerCase()];
          return auths.includes(activeAuthor);
        });
      } else {
        if (activeMonth) filtered = filtered.filter(p => p.month === activeMonth);
        if (activeTag) filtered = filtered.filter(p => p.tags && p.tags.includes(activeTag));
      }
    }
    filtered.sort((a, b) => {
      const tA = a.date ? new Date(a.date + 'T00:00:00').getTime() : 0;
      const tB = b.date ? new Date(b.date + 'T00:00:00').getTime() : 0;
      if (tA !== tB) return tB - tA;
      return (b.id || '').localeCompare(a.id || '');
    });
    renderPosts(filtered);
    document.querySelectorAll('#archive-list a[data-month]').forEach(a => {
      if (activeMonth && a.dataset.month === activeMonth) a.classList.add('active');
      else a.classList.remove('active');
    });
    document.querySelectorAll('.author-badge').forEach(btn => {
      const a = (btn.dataset.author || '').toLowerCase();
      btn.classList.toggle('active', !!activeAuthor && a === activeAuthor);
    });
    const adBtn = document.getElementById('after-dark-toggle');
    if (adBtn) {
      adBtn.classList.toggle('on', !!showAfterDark);
      adBtn.setAttribute('aria-pressed', String(!!showAfterDark));
    }
  }
  function attachTagHandlers() {
    document.querySelectorAll('.tag-btn').forEach(btn => {
      btn.onclick = () => {
        const t = btn.dataset.tag;
        activeTag = (activeTag === t) ? null : t;
        applyFiltersAndRender();
      };
      if (activeTag && btn.dataset.tag === activeTag) btn.classList.add('active');
      else btn.classList.remove('active');
    });
  }
  function attachAuthorHandlers() {
    document.querySelectorAll('.author-badge').forEach(btn => btn.onclick = null);
    document.querySelectorAll('.author-badge:not(.more-badge)').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.blur?.();
        const author = (btn.dataset.author || '').toLowerCase();
        if (!author) return;
        activeAuthor = (activeAuthor === author) ? null : author;
        activeTag = null;
        activeMonth = null;
        activeArticle = null;
        applyFiltersAndRender();
      });
    });
    document.querySelectorAll('.more-badge').forEach(more => {
      more.onclick = null;
      more.addEventListener('click', (e) => {
        const parent = more.parentElement;
        const list = parent && parent.querySelector('.more-list');
        if (!list) return;
        const expanded = more.getAttribute('aria-expanded') === 'true';
        more.setAttribute('aria-expanded', String(!expanded));
        list.setAttribute('aria-hidden', String(expanded));
        list.style.display = expanded ? 'none' : 'block';
        list.querySelectorAll('.hidden-author').forEach(b => {
          if (!b._hasHandler) {
            b.addEventListener('click', (ev) => {
              ev.preventDefault();
              const author = (b.dataset.author || '').toLowerCase();
              activeAuthor = (activeAuthor === author) ? null : author;
              activeTag = null; activeMonth = null; activeArticle = null;
              applyFiltersAndRender();
            });
            b._hasHandler = true;
          }
        });
      });
    });
    document.querySelectorAll('.author-badge').forEach(btn => {
      const a = (btn.dataset.author || '').toLowerCase();
      btn.classList.toggle('active', !!activeAuthor && a === activeAuthor);
    });
  }
const AFTERDARK_KEY = 'veil_showAfterDark';
const GROWNUP_KEY  = 'veil_grownupAccepted';
function bindAfterDarkToggle() {
  const btn = document.getElementById('after-dark-toggle');
  if (!btn) return;
  try {
    const storedPref = localStorage.getItem(AFTERDARK_KEY);
    if (storedPref !== null) showAfterDark = JSON.parse(storedPref);
  } catch (e) {
    console.warn('Could not read showAfterDark from storage', e);
  }
  btn.classList.toggle('on', !!showAfterDark);
  btn.setAttribute('aria-pressed', String(!!showAfterDark));
  btn.onclick = (e) => {
    e.preventDefault();
    showAfterDark = !showAfterDark;
    btn.classList.toggle('on', showAfterDark);
    btn.setAttribute('aria-pressed', String(showAfterDark));
    try { localStorage.setItem(AFTERDARK_KEY, JSON.stringify(showAfterDark)); }
    catch (err) { console.warn('Could not save showAfterDark to storage', err); }
    applyFiltersAndRender();
  };
}
function isGrownupAccepted() {
  try {
    return JSON.parse(localStorage.getItem(GROWNUP_KEY)) === true;
  } catch (e) {
    return false;
  }
}
function bindGrownupToggle() {
  const btn = document.getElementById('grownup-toggle');
  if (!btn) {
    console.warn('bindGrownupToggle: #grownup-toggle not found in DOM — toggle will not be available.');
    return;
  }
  let runtimeAccepted = false;
  const persistedAccepted = isGrownupAccepted();
  btn.dataset.accepted = persistedAccepted ? 'true' : 'unknown';
  btn.classList.toggle('on', !!showGrownup);
  btn.setAttribute('aria-pressed', String(!!showGrownup));
  btn.onclick = (e) => {
    e.preventDefault();
    if (showGrownup) {
      showGrownup = false;
      btn.classList.remove('on');
      btn.setAttribute('aria-pressed', 'false');
      applyFiltersAndRender();
      return;
    }
    if (runtimeAccepted) {
      showGrownup = true;
      btn.classList.add('on');
      btn.setAttribute('aria-pressed', 'true');
      applyFiltersAndRender();
      return;
    }
    showGrownupModal({
      mode: 'confirm',
      onAccept: () => {
        runtimeAccepted = true; 
        try { localStorage.setItem(GROWNUP_KEY, JSON.stringify(true)); } catch (e) {}
        btn.dataset.accepted = 'true';
        showGrownup = true;
        btn.classList.add('on');
        btn.setAttribute('aria-pressed', 'true');
        applyFiltersAndRender();
      }
    });
  };
  window.addEventListener('storage', (ev) => {
    if (ev.key !== GROWNUP_KEY) return;
    const nowAccepted = isGrownupAccepted();
    btn.dataset.accepted = nowAccepted ? 'true' : 'unknown';
    if (!nowAccepted) {
      showGrownup = false;
      btn.classList.remove('on');
      btn.setAttribute('aria-pressed', 'false');
      applyFiltersAndRender();
    }
  });
}
function showGrownupModal({ mode = 'confirm', onAccept } = {}) {
  let backdrop = document.querySelector('.grownup-modal-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'grownup-modal-backdrop';
    backdrop.innerHTML = `
      <div class="grownup-modal" role="dialog" aria-modal="true" aria-labelledby="grownup-title">
        <h3 id="grownup-title">Are you 18 or older?</h3>
        <div class="modal-body"></div>
        <div class="modal-actions"></div>
      </div>
    `;
    document.body.appendChild(backdrop);
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && backdrop.classList.contains('open')) closeGrownupModal();
    });
    backdrop.addEventListener('click', (ev) => {
      if (ev.target === backdrop) closeGrownupModal();
    });
  }
  const body = backdrop.querySelector('.modal-body');
  const actions = backdrop.querySelector('.modal-actions');
  if (mode === 'confirm') {
    if (body) body.innerHTML = `<p class="modal-copy">This section may feature explicit (18+) material, including mature images or discussions. <b>By proceeding, you confirm that you are at least 18 years old and consent to viewing adult content.</b></p>`;
    if (actions) actions.innerHTML = `
      <button type="button" class="btn secondary modal-no">No</button>
      <button type="button" class="btn primary modal-yes">Yes</button>
    `;
  }
  const yes = backdrop.querySelector('.modal-yes');
  if (yes) {
    yes.onclick = () => {
      if (typeof onAccept === 'function') onAccept();
      closeGrownupModal();
    };
  }
  const no = backdrop.querySelector('.modal-no');
  if (no) {
    no.onclick = () => {
      if (body) body.innerHTML = `<p class="message"><b>Come back when you're older!</b></p>`;
      if (actions) actions.innerHTML = `<button type="button" class="btn secondary modal-close">Close</button>`;
      const closeBtn = backdrop.querySelector('.modal-close');
      if (closeBtn) {
        closeBtn.onclick = () => closeGrownupModal();
        closeBtn.focus();
      }
    };
  }
  backdrop.classList.add('open');
  const focusEl = backdrop.querySelector('.modal-yes, .modal-close, .modal-no');
  if (focusEl) focusEl.focus();
}
function closeGrownupModal() {
  const backdrop = document.querySelector('.grownup-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  const body = backdrop.querySelector('.modal-body');
  const actions = backdrop.querySelector('.modal-actions');
  if (actions) {
    actions.innerHTML = `
      <button type="button" class="btn secondary modal-no">No</button>
      <button type="button" class="btn primary modal-yes">Yes</button>
    `;
  }
  const yes = backdrop.querySelector('.modal-yes');
  if (yes) {
    yes.onclick = () => {
      try {
        localStorage.setItem(GROWNUP_KEY, JSON.stringify(true));
      } catch (e) {
        console.warn('Could not store grownup acceptance', e);
      }
      const tbtn = document.getElementById('grownup-toggle');
      if (tbtn) tbtn.dataset.accepted = 'true';
      showGrownup = true;
      const btn = document.getElementById('grownup-toggle');
      if (btn) {
        btn.classList.add('on');
        btn.setAttribute('aria-pressed', 'true');
      }
      closeGrownupModal();
      applyFiltersAndRender();
    };
  }
  const no = backdrop.querySelector('.modal-no');
  if (no) {
    no.onclick = () => {
      if (body) body.innerHTML = `<p class="message">Come back when you're older!</p>`;
      if (actions) actions.innerHTML = `<button type="button" class="btn secondary modal-close">Close</button>`;
      const closeBtn = backdrop.querySelector('.modal-close');
      if (closeBtn) {
        closeBtn.onclick = () => {
          closeGrownupModal();
        };
        closeBtn.focus();
      }
    };
  }
  const gBtn = document.getElementById('grownup-toggle');
  if (gBtn && !isGrownupAccepted()) {
    gBtn.dataset.accepted = 'unknown';
    gBtn.classList.remove('on');
    gBtn.setAttribute('aria-pressed', 'false');
    showGrownup = false;
  }
}
function applyFiltersAndRender() {
  let filtered = postsData.slice();
  if (activeArticle) {
    filtered = postsData.filter(p => p.id === activeArticle);
  } else {
    if (!showAfterDark) {
      filtered = filtered.filter(p => !p.afterDark);
    }
    if (!showGrownup) {
      filtered = filtered.filter(p => !p.showGrownup);
    }
    if (activeAuthor) {
      filtered = filtered.filter(p => {
        const auths = Array.isArray(p.authors)
          ? p.authors.map(a => a.toString().toLowerCase())
          : [(p.author || 'veil').toString().toLowerCase()];
        return auths.includes(activeAuthor);
      });
    } else {
      if (activeMonth) filtered = filtered.filter(p => p.month === activeMonth);
      if (activeTag) filtered = filtered.filter(p => p.tags && p.tags.includes(activeTag));
    }
  }
  filtered.sort((a, b) => {
    const tA = a.date ? new Date(a.date + 'T00:00:00').getTime() : 0;
    const tB = b.date ? new Date(b.date + 'T00:00:00').getTime() : 0;
    if (tA !== tB) return tB - tA;
    return (b.id || '').localeCompare(a.id || '');
  });
  renderPosts(filtered);
  const adBtn = document.getElementById('after-dark-toggle');
  if (adBtn) {
    adBtn.classList.toggle('on', showAfterDark);
    adBtn.setAttribute('aria-pressed', String(!!showAfterDark));
  }
  const gBtn = document.getElementById('grownup-toggle');
  if (gBtn) {
    gBtn.classList.toggle('on', showGrownup);
    gBtn.setAttribute('aria-pressed', String(!!showGrownup));
  }
}
function debounce(fn, wait = 120) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}
function updateMobileFooterHeight() {
  if (window.innerWidth > 680) {
    document.documentElement.style.removeProperty('--mobile-footer-h');
    return;
  }
  const posts = document.querySelectorAll('.post');
  let maxH = 0;
  posts.forEach(post => {
    const footer = post.querySelector('.post-footer');
    if (!footer) return;
    const h = footer.scrollHeight;
    if (h > maxH) maxH = h;
  });
  const final = Math.max(80, Math.ceil(maxH));
  document.documentElement.style.setProperty('--mobile-footer-h', `${final}px`);
}
const updateMobileFooterHeightDebounced = debounce(updateMobileFooterHeight, 500);
window.addEventListener('resize', updateMobileFooterHeightDebounced);
window.addEventListener('orientationchange', updateMobileFooterHeightDebounced);
updateMobileFooterHeight();
function updateFooterHeights() {
  document.querySelectorAll('.post').forEach(post => {
    const footer = post.querySelector('.post-footer');
    if (!footer) return;
    post.style.setProperty('--footer-h', `${footer.offsetHeight}px`);
  });
}
window.addEventListener('resize', updateFooterHeights);
updateFooterHeights();
function init() {
  bindAfterDarkToggle();
  bindGrownupToggle();
  renderArchives(postsData);
  applyFiltersAndRender();
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      const playBtn = document.getElementById('play-pause');
      if (playBtn) playBtn.click();
    }
  });
  window.addEventListener('load', initializeCollapsibles);
}
document.addEventListener('DOMContentLoaded', init);
})();