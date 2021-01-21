#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <ArduinoJson.h>
#include <string>

#define LED1 16

bool serverStatus = false;

ESP8266WebServer server(80);
char ssid[] = "Abhijith wifi";
char pass[] = "Sciencekannan452000!@#$%";
String IP;

void launchWeb()
{
  Serial.println("");
  if (WiFi.status() == WL_CONNECTED)
    Serial.println("WiFi connected");
  Serial.print("Local IP: ");
  Serial.println(WiFi.localIP());
  Serial.print("SoftAP IP: ");
  Serial.println(WiFi.softAPIP());
  server.begin();
  Serial.println("Server started");
}

void setupAP(void)
{
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  WiFi.softAP("Device1", "");
  Serial.println("Initializing_softap_for_wifi credentials_modification");
  launchWeb();
  Serial.println("over");
}

void handleRoot()
{
    if (server.method() != HTTP_GET)
    {

        server.send(405, "text/plain", "Method Not Allowed");
    }
    else
    {

        String message = "Hi the device is alive";

        server.send(200, "text/plain", message);
    }
}

void handleData()
{
    if (server.method() != HTTP_GET)
    {

        server.send(405, "text/plain", "Method Not Allowed");
    }
    else
    {
        String payload;
        StaticJsonDocument<200> doc;
        doc["pH"] = random(5, 6);
        doc["Phosphate"] = random(5, 6);
        doc["Nitrate"] = random(5, 6);
        serializeJson(doc, payload);
        server.send(200, "text/plain", payload);
        Serial.println("Message sent");
    }
}
void wifi()
{

  delay(10);

  if (WiFi.status() == WL_CONNECTED)
  {
    Serial.println("Already connected...");
    return;
  }

  // Connect to WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, pass);

  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println(WiFi.localIP());
  IP = WiFi.localIP().toString();

    if (MDNS.begin("esp8266"))
  {
    Serial.println("MDNS responder started");
  }

}
void setup()
{

    Serial.begin(9600);
    pinMode(LED1, OUTPUT);
    digitalWrite(LED1, HIGH);
    // setupAP();
    wifi();
    server.on("/", handleRoot);
    server.on("/data", handleData);
    server.begin();
    Serial.println("HTTP server started");
    if (MDNS.begin("esp8266"))
    {
        Serial.println("MDNS responder started");
    }
}

void loop()
{
    server.handleClient();
}