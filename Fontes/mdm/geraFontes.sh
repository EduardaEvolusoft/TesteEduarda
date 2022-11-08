#!/bin/bash
cd ..
ng new frontend
cd frontend
ng add @angular/material
npm install bootstrap@4.1.3 jquery@3.3.1 popper.js@1.14.3 --save 
cd ..
mkdir backend
mkdir backend/routes
mkdir backend/models
mkdir backend/app
mkdir backend/app/controllers
mkdir frontend/src/app/models
mkdir frontend/src/app/services
mkdir frontend/src/app/components
cd frontend/src/app/components/
ng g c add-usuario
ng g c list-usuario
ng g c details-usuario
ng g c add-perfilUsuario
ng g c list-perfilUsuario
ng g c details-perfilUsuario
ng g c add-pergunta
ng g c list-pergunta
ng g c details-pergunta
ng g c add-enquete
ng g c list-enquete
ng g c details-enquete
ng g c add-entrevistadorAutorizado
ng g c list-entrevistadorAutorizado
ng g c details-entrevistadorAutorizado
ng g c add-entrevistadoAutorizado
ng g c list-entrevistadoAutorizado
ng g c details-entrevistadoAutorizado
ng g c add-tipoResposta
ng g c list-tipoResposta
ng g c details-tipoResposta
ng g c add-entrevista
ng g c list-entrevista
ng g c details-entrevista
ng g c add-respostaPergunta
ng g c list-respostaPergunta
ng g c details-respostaPergunta
cd ../../../..
cd backend/models
mi g app mean index > index.js
cd ..
mi g app mean server > server.js
npm init -y
npm install express mongoose cors --save
cd ..
mi g app angular appModule > frontend/src/app/app.module.ts
mi g app angular appRouting > frontend/src/app/app-routing.module.ts
mi g app angular appComponentHTML > frontend/src/app/app.component.html
mi g app angular appComponentTS > frontend/src/app/app.component.ts
mi g app angular appComponentCSS > frontend/src/app/app.component.css
mi g app angular indexHTML > frontend/src/index.html
mapperidea generate app mean mongoModel entityName=Usuario > backend/models/usuario.model.js
mapperidea generate app mean mongoModel entityName=PerfilUsuario > backend/models/perfilUsuario.model.js
mapperidea generate app mean mongoModel entityName=Pergunta > backend/models/pergunta.model.js
mapperidea generate app mean mongoModel entityName=Enquete > backend/models/enquete.model.js
mapperidea generate app mean mongoModel entityName=EntrevistadorAutorizado > backend/models/entrevistadorAutorizado.model.js
mapperidea generate app mean mongoModel entityName=EntrevistadoAutorizado > backend/models/entrevistadoAutorizado.model.js
mapperidea generate app mean mongoModel entityName=TipoResposta > backend/models/tipoResposta.model.js
mapperidea generate app mean mongoModel entityName=Entrevista > backend/models/entrevista.model.js
mapperidea generate app mean mongoModel entityName=RespostaPergunta > backend/models/respostaPergunta.model.js
mapperidea generate app mean apiController entityName=Usuario > backend/app/controllers/usuario.controller.js
mapperidea generate app mean apiController entityName=PerfilUsuario > backend/app/controllers/perfilUsuario.controller.js
mapperidea generate app mean apiController entityName=Pergunta > backend/app/controllers/pergunta.controller.js
mapperidea generate app mean apiController entityName=Enquete > backend/app/controllers/enquete.controller.js
mapperidea generate app mean apiController entityName=EntrevistadorAutorizado > backend/app/controllers/entrevistadorAutorizado.controller.js
mapperidea generate app mean apiController entityName=EntrevistadoAutorizado > backend/app/controllers/entrevistadoAutorizado.controller.js
mapperidea generate app mean apiController entityName=TipoResposta > backend/app/controllers/tipoResposta.controller.js
mapperidea generate app mean apiController entityName=Entrevista > backend/app/controllers/entrevista.controller.js
mapperidea generate app mean apiController entityName=RespostaPergunta > backend/app/controllers/respostaPergunta.controller.js
mapperidea generate app angular model entityName=Usuario > frontend/src/app/models/usuario.model.ts
mapperidea generate app angular model entityName=PerfilUsuario > frontend/src/app/models/perfil-usuario.model.ts
mapperidea generate app angular model entityName=Pergunta > frontend/src/app/models/pergunta.model.ts
mapperidea generate app angular model entityName=Enquete > frontend/src/app/models/enquete.model.ts
mapperidea generate app angular model entityName=EntrevistadorAutorizado > frontend/src/app/models/entrevistador-autorizado.model.ts
mapperidea generate app angular model entityName=EntrevistadoAutorizado > frontend/src/app/models/entrevistado-autorizado.model.ts
mapperidea generate app angular model entityName=TipoResposta > frontend/src/app/models/tipo-resposta.model.ts
mapperidea generate app angular model entityName=Entrevista > frontend/src/app/models/entrevista.model.ts
mapperidea generate app angular model entityName=RespostaPergunta > frontend/src/app/models/resposta-pergunta.model.ts
mi g app angular dataService entityName=Usuario > frontend/src/app/services/usuario.service.ts
mi g app angular dataService entityName=PerfilUsuario > frontend/src/app/services/perfil-usuario.service.ts
mi g app angular dataService entityName=Pergunta > frontend/src/app/services/pergunta.service.ts
mi g app angular dataService entityName=Enquete > frontend/src/app/services/enquete.service.ts
mi g app angular dataService entityName=EntrevistadorAutorizado > frontend/src/app/services/entrevistador-autorizado.service.ts
mi g app angular dataService entityName=EntrevistadoAutorizado > frontend/src/app/services/entrevistado-autorizado.service.ts
mi g app angular dataService entityName=TipoResposta > frontend/src/app/services/tipo-resposta.service.ts
mi g app angular dataService entityName=Entrevista > frontend/src/app/services/entrevista.service.ts
mi g app angular dataService entityName=RespostaPergunta > frontend/src/app/services/resposta-pergunta.service.ts
mi g app mean routes entityName=Usuario > backend/routes/usuario.routes.js
mi g app mean routes entityName=PerfilUsuario > backend/routes/perfilUsuario.routes.js
mi g app mean routes entityName=Pergunta > backend/routes/pergunta.routes.js
mi g app mean routes entityName=Enquete > backend/routes/enquete.routes.js
mi g app mean routes entityName=EntrevistadorAutorizado > backend/routes/entrevistadorAutorizado.routes.js
mi g app mean routes entityName=EntrevistadoAutorizado > backend/routes/entrevistadoAutorizado.routes.js
mi g app mean routes entityName=TipoResposta > backend/routes/tipoResposta.routes.js
mi g app mean routes entityName=Entrevista > backend/routes/entrevista.routes.js
mi g app mean routes entityName=RespostaPergunta > backend/routes/respostaPergunta.routes.js
mi g app angular addComponentHTML editorName=UsuarioEditor >  frontend/src/app/components/add-usuario/add-usuario.component.html
mi g app angular addComponentTS editorName=UsuarioEditor >  frontend/src/app/components/add-usuario/add-usuario.component.ts
mi g app angular listComponentHTML listName=UsuarioList >  frontend/src/app/components/list-usuario/list-usuario.component.html 
mi g app angular listComponentTS listName=UsuarioList >  frontend/src/app/components/list-usuario/list-usuario.component.ts
mi g app angular detailsComponentHTML editorName=UsuarioEditor >  frontend/src/app/components/details-usuario/details-usuario.component.html
mi g app angular detailsComponentTS editorName=UsuarioEditor >  frontend/src/app/components/details-usuario/details-usuario.component.ts
mi g app angular addComponentHTML editorName=PerfilUsuarioEditor >  frontend/src/app/components/add-perfil-usuario/add-perfil-usuario.component.html
mi g app angular addComponentTS editorName=PerfilUsuarioEditor >  frontend/src/app/components/add-perfil-usuario/add-perfil-usuario.component.ts
mi g app angular listComponentHTML listName=PerfilUsuarioList >  frontend/src/app/components/list-perfil-usuario/list-perfil-usuario.component.html 
mi g app angular listComponentTS listName=PerfilUsuarioList >  frontend/src/app/components/list-perfil-usuario/list-perfil-usuario.component.ts
mi g app angular detailsComponentHTML editorName=PerfilUsuarioEditor >  frontend/src/app/components/details-perfil-usuario/details-perfil-usuario.component.html
mi g app angular detailsComponentTS editorName=PerfilUsuarioEditor >  frontend/src/app/components/details-perfil-usuario/details-perfil-usuario.component.ts
mi g app angular addComponentHTML editorName=PerguntaEditor >  frontend/src/app/components/add-pergunta/add-pergunta.component.html
mi g app angular addComponentTS editorName=PerguntaEditor >  frontend/src/app/components/add-pergunta/add-pergunta.component.ts
mi g app angular listComponentHTML listName=PerguntaList >  frontend/src/app/components/list-pergunta/list-pergunta.component.html 
mi g app angular listComponentTS listName=PerguntaList >  frontend/src/app/components/list-pergunta/list-pergunta.component.ts
mi g app angular detailsComponentHTML editorName=PerguntaEditor >  frontend/src/app/components/details-pergunta/details-pergunta.component.html
mi g app angular detailsComponentTS editorName=PerguntaEditor >  frontend/src/app/components/details-pergunta/details-pergunta.component.ts
mi g app angular addComponentHTML editorName=EnqueteEditor >  frontend/src/app/components/add-enquete/add-enquete.component.html
mi g app angular addComponentTS editorName=EnqueteEditor >  frontend/src/app/components/add-enquete/add-enquete.component.ts
mi g app angular listComponentHTML listName=EnqueteList >  frontend/src/app/components/list-enquete/list-enquete.component.html 
mi g app angular listComponentTS listName=EnqueteList >  frontend/src/app/components/list-enquete/list-enquete.component.ts
mi g app angular detailsComponentHTML editorName=EnqueteEditor >  frontend/src/app/components/details-enquete/details-enquete.component.html
mi g app angular detailsComponentTS editorName=EnqueteEditor >  frontend/src/app/components/details-enquete/details-enquete.component.ts
mi g app angular addComponentHTML editorName=EntrevistadorAutorizadoEditor >  frontend/src/app/components/add-entrevistador-autorizado/add-entrevistador-autorizado.component.html
mi g app angular addComponentTS editorName=EntrevistadorAutorizadoEditor >  frontend/src/app/components/add-entrevistador-autorizado/add-entrevistador-autorizado.component.ts
mi g app angular listComponentHTML listName=EntrevistadorAutorizadoList >  frontend/src/app/components/list-entrevistador-autorizado/list-entrevistador-autorizado.component.html 
mi g app angular listComponentTS listName=EntrevistadorAutorizadoList >  frontend/src/app/components/list-entrevistador-autorizado/list-entrevistador-autorizado.component.ts
mi g app angular detailsComponentHTML editorName=EntrevistadorAutorizadoEditor >  frontend/src/app/components/details-entrevistador-autorizado/details-entrevistador-autorizado.component.html
mi g app angular detailsComponentTS editorName=EntrevistadorAutorizadoEditor >  frontend/src/app/components/details-entrevistador-autorizado/details-entrevistador-autorizado.component.ts
mi g app angular addComponentHTML editorName=EntrevistadoAutorizadoEditor >  frontend/src/app/components/add-entrevistado-autorizado/add-entrevistado-autorizado.component.html
mi g app angular addComponentTS editorName=EntrevistadoAutorizadoEditor >  frontend/src/app/components/add-entrevistado-autorizado/add-entrevistado-autorizado.component.ts
mi g app angular listComponentHTML listName=EntrevistadoAutorizadoList >  frontend/src/app/components/list-entrevistado-autorizado/list-entrevistado-autorizado.component.html 
mi g app angular listComponentTS listName=EntrevistadoAutorizadoList >  frontend/src/app/components/list-entrevistado-autorizado/list-entrevistado-autorizado.component.ts
mi g app angular detailsComponentHTML editorName=EntrevistadoAutorizadoEditor >  frontend/src/app/components/details-entrevistado-autorizado/details-entrevistado-autorizado.component.html
mi g app angular detailsComponentTS editorName=EntrevistadoAutorizadoEditor >  frontend/src/app/components/details-entrevistado-autorizado/details-entrevistado-autorizado.component.ts
mi g app angular addComponentHTML editorName=TipoRespostaEditor >  frontend/src/app/components/add-tipo-resposta/add-tipo-resposta.component.html
mi g app angular addComponentTS editorName=TipoRespostaEditor >  frontend/src/app/components/add-tipo-resposta/add-tipo-resposta.component.ts
mi g app angular listComponentHTML listName=TipoRespostaList >  frontend/src/app/components/list-tipo-resposta/list-tipo-resposta.component.html 
mi g app angular listComponentTS listName=TipoRespostaList >  frontend/src/app/components/list-tipo-resposta/list-tipo-resposta.component.ts
mi g app angular detailsComponentHTML editorName=TipoRespostaEditor >  frontend/src/app/components/details-tipo-resposta/details-tipo-resposta.component.html
mi g app angular detailsComponentTS editorName=TipoRespostaEditor >  frontend/src/app/components/details-tipo-resposta/details-tipo-resposta.component.ts
mi g app angular addComponentHTML editorName=EntrevistaEditor >  frontend/src/app/components/add-entrevista/add-entrevista.component.html
mi g app angular addComponentTS editorName=EntrevistaEditor >  frontend/src/app/components/add-entrevista/add-entrevista.component.ts
mi g app angular listComponentHTML listName=EntrevistaList >  frontend/src/app/components/list-entrevista/list-entrevista.component.html 
mi g app angular listComponentTS listName=EntrevistaList >  frontend/src/app/components/list-entrevista/list-entrevista.component.ts
mi g app angular detailsComponentHTML editorName=EntrevistaEditor >  frontend/src/app/components/details-entrevista/details-entrevista.component.html
mi g app angular detailsComponentTS editorName=EntrevistaEditor >  frontend/src/app/components/details-entrevista/details-entrevista.component.ts
mi g app angular addComponentHTML editorName=RespostaPerguntaEditor >  frontend/src/app/components/add-resposta-pergunta/add-resposta-pergunta.component.html
mi g app angular addComponentTS editorName=RespostaPerguntaEditor >  frontend/src/app/components/add-resposta-pergunta/add-resposta-pergunta.component.ts
mi g app angular listComponentHTML listName=RespostaPerguntaList >  frontend/src/app/components/list-resposta-pergunta/list-resposta-pergunta.component.html 
mi g app angular listComponentTS listName=RespostaPerguntaList >  frontend/src/app/components/list-resposta-pergunta/list-resposta-pergunta.component.ts
mi g app angular detailsComponentHTML editorName=RespostaPerguntaEditor >  frontend/src/app/components/details-resposta-pergunta/details-resposta-pergunta.component.html
mi g app angular detailsComponentTS editorName=RespostaPerguntaEditor >  frontend/src/app/components/details-resposta-pergunta/details-resposta-pergunta.component.ts
