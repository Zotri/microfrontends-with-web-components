# microfrontends-with-web-components
# Full Stack Web Application with Micro Frontends and Web Components

## Frontend

### To start first fragment from Team A

```console
user@workstation:~$ cd micro_apps/team-list/angular-frontend
ng serve
```

### To start 2end fragment from Team B

```console
user@workstation:~$ cd micro_apps/team-create/vue-frontend
npm run serve
```

### To start 3rd fragment from Team C (Web Components)

```console
user@workstation:~$ cd team-view/react-frontend && npm run build && cd .. && cd .. && npm run micro-apps
```

## Backend

you need to import this path in vscode or another IDE by your choice, then start the spring-boot backend from there. The same steps for vue-backend

## Database
on the directory root a dumb db sql "db-dump-mf-otri.sql" file needed to be imported with MySQL Workbench  
