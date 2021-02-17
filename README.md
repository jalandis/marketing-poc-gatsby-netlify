# Test Spike Results

site    : https://laughing-noether-7b439b.netlify.app
cms     : https://laughing-noether-7b439b.netlify.app/admin
graphql : http://localhost:8424/__graphql

1. Updated existing content and clicked publish 
    - no developers needed
2. Updated new content for existing template and clicked publish 
    - no developers needed
3. Create new component/layout for content
    - Learn the framework and it seems simple enough (see 4 + 5 for issues with testing)
4. Local development environment setup
    - Successful but had some sporadic build issues (sass broken on example site maybe)
    - Site and CMS code are local but content is pulled from and committed to the master branch
5. PR creates a deploy preview of the site including the CMS
    - Again the content is pulled from and committed to the master branch
6. Developers experience
    - Default options are not great 
        - JS with some sort of TypeScript option but I am skeptical about support
        - Large CS framework seems to be included but we can drop probably
        - GraphQL seems like overkill and will certainly have a steep learning curve
    - Gotta fix the dev environment committing to master
7. Build from multiple sources
    - graphql is a pain and I don't see the benefit for our use cases (maybe research a bit to see what upside may be)
        - It does have a GUI to generate some simpler queries (uses DB connect to collect schema data)
    - Unknown errors in build again (useless JS errors pointing to some build component with no information as to cause)
    - Reverting all the way back to the init project, I get CSS errors breaking the build (no semicolons?!?! no curly brackets?!?!)
    - Deleting all Sass code I get the original error (I give up)
8. Searching for fixes to issues I found some horror stories about Gatsby (misleading advertisements about performance etc.)
    - Disgruntled developers venting or legitimate unethical behaviour?
9. Creating a personal Heroku test database and adding URL to netlify configs   
    - https://dashboard.heroku.com/apps/mark-test-database
