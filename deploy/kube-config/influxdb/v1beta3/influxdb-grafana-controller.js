{
  "apiVersion": "v1beta3",
  "kind": "ReplicationController",
  "metadata": {
    "labels": {
      "name": "influxGrafana"
    },
    "name": "monitoring-influx-grafana-controller"
  },
  "spec": {
    "replicas": 1,
    "selector": {
      "name": "influxGrafana"
    },
    "template": {
      "metadata": {
        "labels": {
          "name": "influxGrafana"
        }
      },
      "spec": {
        "containers": [
          {
            "image": "kubernetes/heapster_influxdb:v0.3",
            "name": "influxdb"
          },
          {
            "env": [
              {
                "name": "INFLUXDB_EXTERNAL_URL",
                "value": "/api/v1beta1/proxy/services/monitoring-grafana/db/"
              },
              {
                "name": "INFLUXDB_HOST",
                "value": "monitoring-influxdb"
              },
              {
                "name": "INFLUXDB_PORT",
                "value": "80"
              }
            ],
            "image": "kubernetes/heapster_grafana:v0.6",
            "name": "grafana"
          }
        ]
      }
    }
  }
}