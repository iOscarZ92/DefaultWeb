
<!--METADATA TYPE="typelib" UUID="CD000000-8B95-11D1-82DB-00C04FB1625D" NAME="CDO for Windows Library" -->
<!--METADATA TYPE="typelib" UUID="00000205-0000-0010-8000-00AA006D2EA4" NAME="ADODB Type Library" --> 

<%@ Language=VBScript %>
<HTML>
<HEAD>
<META NAME="GENERATOR" Content="Microsoft Visual Studio 6.0">
</HEAD>
<BODY>

<%

Private Function HTMLDecode(byVal encodedstring)
     Dim tmp, i
     tmp = encodedstring
     tmp = Replace( tmp, "%20", " " )
     tmp = Replace( tmp, "%22",""""  )
     tmp = Replace( tmp, "&quot;", chr(34) )
     tmp = Replace( tmp, "&lt;"  , chr(60) )
     tmp = Replace( tmp, "&gt;"  , chr(62) )
     tmp = Replace( tmp, "&amp;" , chr(38) )
     tmp = Replace( tmp, "&nbsp;", chr(32) )
     For i = 1 to 255
          tmp = Replace( tmp, "&#" & i & ";", chr( i ) )
     Next
     HTMLDecode = tmp
End Function

Function CheckStringForSQL(str) 
      On Error Resume Next 
      
      Dim lstr, BlackList 
 
    BlackList = Array(" or ", "'", "--", ";", "/*", "*/", "@@", "@",_
                          "char", "nchar", "varchar", "nvarchar",_
                          "alter", "begin", "cast", "create", "cursor",_
                          "declare", "delete", "drop", "end", "exec",_
                          "execute", "fetch", "insert", "kill", "open",_
                          "select", "sys", "sysobjects", "syscolumns",_
                          "table", "update")
      
      
      ' If the string is empty, return true
      If ( IsEmpty(str) ) Then
        CheckStringForSQL = false
        Exit Function
      ElseIf ( StrComp(str, "") = 0 ) Then
        CheckStringForSQL = false
        Exit Function
      End If
      
      lstr = LCase(str)
      
      ' Check if the string contains any patterns in our
      ' black list
      For Each s in BlackList
      
        If ( InStr (lstr, s) <> 0 ) Then
          CheckStringForSQL = false
          Exit Function
        End If
      
      Next
      
      CheckStringForSQL = true
      
    End Function 
	
	'Request de las Variables Necesarias.	
	vFrom	=	server.htmlencode(Request.QueryString("vFrom"))
	vTo		=	server.htmlencode(Request.QueryString("vTo"))
	vBcc	=	server.htmlencode(Request.QueryString("vBcc"))
	
	if CheckStringForSQL(Request.QueryString("vSubject")) = True then
		vSubject	=	server.htmlencode(Request.QueryString("vSubject"))
	else
		vSubject = ""
	end if
	
	if CheckStringForSQL(Request.QueryString("vImportance")) = True then
		vImportance	=	server.htmlencode(Request.QueryString("vImportance"))
	else
		vImportance = ""
	end if
	
	vBody	=	server.htmlencode(Request.QueryString("vBody"))
	
	vBody = Replace(vBody, "{{Gato}}", "#")
	vBody = Replace(vBody, "{{Amper}}", "&")
	vBody = Replace(vBody, "{{ParentIzq}}", "(")
	vBody = Replace(vBody, "{{ParentDer}}", ")")
	vBody = Replace(vBody, "{{Comilla}}", "'")
	
	vBody = HTMLDecode(vBody)
	
	
%>

<%=vTo%>
<br>
<%=vBcc%>
<br>
<%=vSubject%>
<br>
<%=vImportance%>
<br>
<%=vBody%>
<br>

<%
        Dim Flds
	set iConf	=	Server.CreateObject("CDO.Configuration")

	Set Flds = iConf.Fields 
	With Flds 	
		.Item(cdoSendUsingMethod) = 2
		.Item(cdoSMTPServer) = "15.192.40.89"
		.Item(cdoSMTPServerPort) = 25 
		.Item(cdoSMTPconnectiontimeout) = 10 
		.Update 
	End With





	'Con las variables anteriores, hacemos el envío de eMail.
	if vFrom = "" then
		vFrom = "servicio.afore@banorte.com"
	end if

	set correo	=	Server.CreateObject("CDO.Message")

	Set correo.Configuration = iConf


	correo.From	=	vFrom
	correo.To	=	vTo
	if vBcc <> "" then
		correo.Bcc	=	vBcc
	end if
	correo.Subject	=	vSubject
	correo.HTMLBody	= vBody
	On Error Resume Next
		correo.Send
	If Err <> 0 Then
		Response.Write "Un error a ocurrido: " & Err.Description
	End If
        ' fin de envio de correo
%>

</BODY>
</HTML>
