const e=`
---
title: "Chapter 1: The Price of Order"
slug: chapter-1
order: 3
---

# Chapter 1: The Price of Order

PostgreSQL enforces its rules through a formidable mechanism: the **AccessExclusiveLock**. When modifying a table's schema, the database halts operations, preventing all writes, reads, and transactions until the change is complete.

Consider this naive approach:

\`\`\`sql
-- A dangerous change that will lock the entire table
ALTER TABLE users_user ADD CONSTRAINT users_email_unique UNIQUE(email);
\`\`\`

On a small table, this would be instant. On a table with millions of records, it could take minutes—or longer. During this time, all queries that depend on this table will queue up, waiting for the migration to finish. The application will freeze. Users will see timeouts. Customer support will flood with complaints. And all because we asked PostgreSQL to enforce a rule that was not there before.

But we are not without options. There is a way to achieve order without bringing the system to its knees.
`;export{e as default};
